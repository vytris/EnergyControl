#include "EmonLib.h"
#include "FirebaseArduino.h"
#include "ESP8266WiFi.h" 
 
EnergyMonitor SCT013;
 
int pinSCT = A0;   //Pino analógico conectado ao SCT-013
 
int tensao = 127;
int potencia;
int acumuladorP = 0;
double acumuladorC = 0;
int n = 0;


#define FIREBASE_AUTH "c1wqxAprBxTh6eWhs7jOxyAW8J3GXPktpukYwQxy"
#define FIREBASE_HOST "energycontroltest.firebaseio.com" 

#define WIFI_SSID "ALBERG_2G"
#define WIFI_PASSWORD "100200300"



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

    n = n+1;
    if(n>=6){
      acumuladorP = potencia + acumuladorP;
      acumuladorC = Irms + acumuladorC;
    }

    if(n==65){
      Serial.println(acumuladorP);
      Serial.println(acumuladorC);
      String dado = String(acumuladorC/60) + String(" ") + String(acumuladorP*60);
      Serial.println(dado);
      Firebase.pushString("/cabo", dado);
      n = 5;
      acumuladorP = 0;
      acumuladorC = 0;
    }
   
    delay(500);
    Serial.println(".");
    delay(500);
    

}
