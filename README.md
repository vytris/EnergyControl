## Energy Control (ESS Project)

### Integrantes:
- Pedro Gabriel
- Nicholas Henrique
- Rafael Sutil
- Gabriela Holanda
- Ricardo Fagundes


## Como utilizar o Git para esse projeto:

  Primeiramente você ira clonar o repositorio na sua maquina usando o comando:

``` bash
git clone https://github.com/vytris/EnergyControl.git
```

Sempre que for mexer em alguma coisa nova, crie uma nova branch

``` bash
git checkout -b nomedasuabranch
```

Caso ja esteja utilizando uma branch e queira voltar a mexer nela
``` bash
git checkout nomedasuabranch
```

Para mandar os baguis para o GitHub, você precisa seguir os seguintes passos
``` bash
git add .
```
``` bash
git commit -m " descriçao do que foi feito desde o ultimo commit " (Explique sucintamente o que vc fez)
```
``` bash
git push -u origin nomedasuabranch (Em caso de ser o primeiro push dessa branch)
```
``` bash
git push (Caso contrario)
```


## Como rodar o app no seu celular:

Siga os procedimentos para habilitar seu celular no modo desenvolvedor:
  - Vá em configuraçoes/Sistema/Sobre
  - Procure o numero da versao do software
  - Clique repetidamente até desbloquear o modo dev
  - Volte e abra o menu de dev
  - Habilite a Depuraçao USB
  - Feito

Em seguida, após ter clonado o repositorio e conectado o celular no computador (Dica, use no W10), abra a pasta do projeto no terminal e digite

``` bash
npm install
```
Verifique se o seu celular está corretamente conectado com

``` bash
adb devices
```

Caso esteja, rode o seguinte comando

``` bash
react-native run-android
```

E pronto!! 


## Links Utéis

* [React-Native](https://facebook.github.io/react-native/docs/getting-started)



