#include "EmonLib.h"
#include "FirebaseArduino.h"
#include "ESP8266WiFi.h" 
 
EnergyMonitor SCT013;
 
int pinSCT = A0;   //Pino analógico conectado ao SCT-013
 
int tensao = 127;
int potencia;

#define FIREBASE_AUTH "c1wqxAprBxTh6eWhs7jOxyAW8J3GXPktpukYwQxy"
#define FIREBASE_HOST "energycontroltest.firebaseio.com" 

#define WIFI_SSID "CINGUESTS"
#define WIFI_PASSWORD "acessocin"



void setup()
{
    SCT013.current(pinSCT, 6.0606);
 
    Serial.begin(9600);

    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Connecting to ");
    Serial.print(WIFI_SSID);
    while (WiFi.status() != WL_CONNECTED) {
      Serial.print(".");
      delay(500);
    }
    Serial.println();
    Serial.print("Connected to ");
    Serial.println(WIFI_SSID);
    Serial.print("IP Address is : ");
    Serial.println(WiFi.localIP());    
    Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}
 
void loop()
{
    double Irms = SCT013.calcIrms(1480);   // Calcula o valor da Corrente
    
    potencia = Irms * tensao;         // Calcula o valor da Potencia Instantanea    
 
    Serial.print("Corrente = ");
    Serial.print(Irms);
    Serial.println(" A");
    
    Serial.print("Potencia = ");
    Serial.print(potencia);
    Serial.println(" W");

    String dado = String(Irms) + String(" A ") + String(potencia) + String(" W");
    Firebase.pushString("/cabo", dado);
   
    delay(500);
 
    Serial.print(".");
    delay(500);
    Serial.print(".");
    delay(500);
    Serial.println(".");
    delay(500);
}
