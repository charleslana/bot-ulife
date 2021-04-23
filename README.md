<h1 align="center">Bot Ulife</h1>
<div align="center">
<img src="https://i.imgur.com/6j9IoAR.png" height="150" alt="Bot ulife">
</div>

## Introdução

Esta aplicação é um pequeno bot responsável por buscar a aula da aplicação zoom pelo site da faculdade Una pelo sistema Ulife.

O processo de automatização que o bot realiza permite que ao acioná-lo a aula ads da faculdade irá abrir para que possa interagir com a aplicação do zoom.

O intuito é fazer com que o aluno possa acessar a aula de uma forma rápida a qualquer momento.

## Requisitos para instalação do bot

Instalar o node v14.16.1 LTS

[Clique aqui para instalar o Node](https://nodejs.org/en/)

## Baixar

* [Clique aqui para baixar o projeto pelo repositório diretamente](https://github.com/charleslana/bot-ulife/archive/refs/heads/master.zip)

Ou

Clonar pelo Git

```
git clone https://github.com/charleslana/bot-ulife.git
```

## Instalação

Após a instalação do node/npm e baixar ou clonar o projeto você deve concluir a instalação do bot no terminal.

Na raiz da pasta do projeto abra o terminal ou cmd e execute o comando:
```
npm install
```

## Configuração

Para configurar o bot é necessário informar as credenciais de acesso ao ao site do calendar da ulife.

Navegando na pasta do projeto vá até a pasta
```
bot-ulife/cypress/config/
```

Abra o arquivo **index.example.ts** com um editor de texto e altere os dados aonde está escrito conforme abaixo dentro das aspas:

```
export const config = {
    USER_RA: 'informe seu RA',
    USER_PASSWORD: 'informe sua Senha'
}
```

**Importante**

Ao salvar o arquivo, vá até a pasta do arquivo **index.example.ts** e o renomeie para

```
index.ts
```
Dessa forma a configuração estará completa e caso você altere sua senha você pode alterar o arquivo novamente.

## Execução

Na pasta raiz do projeto basta abrir seu terminal ou cmd e executar o comando

```
npm run bot:chrome
```

O processo é automático.

## Em execução

<img src="https://i.imgur.com/wiaDDEK.gif" alt="Em execução">

## Duração de execução

A duração pode variar conforme a conexão da internet ou da resposta do servidor.

Teste em média de 10 a 13 segundos

## Atalhos

Você pode criar um atalho ao invés de executar a linha de comando.

Para usuários que utiliza o sistema operacional **Windows** basta criar um arquivo com nome e extensão **atalho.bat**, além disso você deve especificar o caminho do projeto na pasta raiz e a execução dentro do arquivo, sendo assim:

```
cd C:\bot-ulife\
npm run bot:chrome
```

Depois salve o arquivo e basta executá-lo.

## Sistemas operacionais testado

- [x] Linux
- [x] Windows 10
- [ ] macOs

## Navegadores testado

- [x] Google Chrome
- [x] Electron
- [ ] Firefox
- [ ] Microsoft Edge
- [ ] Internet Explorer
- [ ] Opera
- [ ] Safari

## Tecnologias usada

[Typescript](https://www.typescriptlang.org/)

[React](https://pt-br.reactjs.org/)

[Cypress](https://www.cypress.io/)

## Contribuir

O projeto é Open source e pode ser aprimorado, ele foi iniciado para continuidade e aprimoração.

Se você quiser ajudar, faça um Fork do projeto, faça suas modificações e abre uma pull request, iremos avaliar e suas modificações ficarão como contribuidores.

## Autor

| [<img src="https://avatars.githubusercontent.com/u/63615970?v=4?size=115" width=115><br><sub>@charleslana</sub>](https://github.com/charleslana) |
| :---: |

## Contribuidores

| [<img src="https://avatars.githubusercontent.com/u/61798509?v=4?size=115" width=115><br><sub>@matheusreis-oliveira</sub>](https://github.com/matheusreis-oliveira) |
| :---: |

## Dúvidas ou problemas

Abra uma issue (uma questão) para que possamos o ajudar.

## Licença

Este projeto está licenciado sob a GNU General Public License v3.0, consulte o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.