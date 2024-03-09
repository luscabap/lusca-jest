<h1 align="center"> 💻 Lucas Baptista - Sorteador Amigo Secreto 🎲 </h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Desenvolvedor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 🖥️ Sobre o projeto

O projeto foi desenvolvido utilizando:
- Jest e Testing Library foram empregados para aperfeiçoar a prática de testes unitários na aplicação, seguindo a metodologia de Desenvolvimento Orientado por Testes (TDD).
- RecoilJS foi utilizado para criar átomos de informação e hooks personalizados, fornecendo um contexto claro e compreensível para toda a aplicação.
- React, TypeScript, SASS para criação e estilização da página;

O site funciona com a inserção de no mínimo 3 nomes para a realização do sorteio de amigo secreto e depois a exibição desse sorteio.

Os testes criados foram:
- Teste da Página Principal: garante que a página seja renderizada corretamente.
 - Teste do Formulário: verifica se o input vazio impede a adição de novos participantes, detecta duplicatas de nomes e exibe mensagens de erro quando necessário.
- Teste Lista de Participantes: descreve 2 cénarios:
    - Quando a lista estiver vazia: deverá ser renderizada sem elementos;
    - Quando a lista estiver preencida corretamente: rendiza todos os participantes;
- Teste do Rodapé: confirma se o botão para iniciar a brincadeira só é habilitado quando há participantes suficientes e se o redirecionamento para a tela de sorteio ocorre corretamente após o início da brincadeira.
- Teste da Página de Sorteio: assegura que todos os participantes sejam exibidos quando solicitado e que o redirecionamento para a página principal funcione corretamente quando o botão "Página Principal" é clicado.
- Teste do Hook de Sorteio: verifica se nenhum participante seleciona o próprio nome durante o sorteio.


🌎 Deploy do projeto: [https://lusca-amigo-secreto.vercel.app/](https://lusca-amigo-secreto.vercel.app/)

---

## 🖼️ Layout

_WEB_

![GK1](https://github.com/luscabap/lusca-jest/blob/main/public/web_01.png)
![GK1](https://github.com/luscabap/lusca-jest/blob/main/public/web_02.png)

---

## 🛠 Tecnologias 

As seguintes ferramentas foram usadas para desenvolver o projeto:

### Front End
- JEST <img align="center" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"/>
- TESTING LIBRARY <img align="center" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
- RECOILJS <img align="center" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
- REACT <img align="center" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
- TYPESCRIPT <img align="center" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"/>
- SASS  <img align="center" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"/>
- VITE <img align="center" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"/>
- NPM <img align="center" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"/>
 
          
### Ambiente de Desenvolvimento
- Visual Studio Code <img align="center" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"/>

---

## 👨‍🎓 Desenvolvedor

<a href="https://www.linkedin.com/in/lucas-baptista-da-silva-133779233/">
Lucas Baptista da Silva</a>

<br/>

<a href = "mailto:lucasbaptistasilva.dev@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white"  target="_blank"></a>

---

### 📝 Licença

Este projeto esta sobre a LICENÇA:

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/luscabap/lusca-projeto_organo/blob/master/LICENSE)
