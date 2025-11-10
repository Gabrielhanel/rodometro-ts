## Rodômetro

### Seja bem vindo à nova versão do rodômetro! Digo nova pois já havia feito esse projeto em Javascript e, como parte dos meu estudos, decidi refazer em Typescript.

#### Tecnologias Utilizadas:
- React Native com Expo  
- TypeScript  
- React Navigation (stack)  
- Google Fonts (Lexend Deca)

#### Requisitos mínimos:
* Node.js v18+
* Expo SDK 54+
* TypeScript 5.9+

#### Configurações: 
* Ao abrir esse projeto pela primeira vez, é necessário importar algumas coisas pelo terminal. Rode os comandos: 

    ``` bash
    npm install 
    npx expo install @expo-google-fonts/lexend-deca expo-font
    npm install expo-app-loading
    npm install @react-navigation/native
    npx expo install react-native-screens react-native-safe-area-context
    npm install @react-navigation/native-stack
    ```

* Para rodar o aplicativo, execute: 
    ```
    npx expo start 
    ```

#### Funcionalidades: 

* Calcula automaticamente a média de consumo de combustível (Km/L).
* Permite inserir a quilometragem percorrida e os litros consumidos.
* Exibe uma classificação de desempenho (A a E) com base na média obtida.
* Possui navegação entre telas para entrada de dados e visualização do resultado.
