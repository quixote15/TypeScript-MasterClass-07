<h1 align="center">
  <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/masterclass.png" width="120px" />
</h1>

<h3 align="center">
  Estudo: TypeScript, o início
</h3>

<p align="center">Esse projeto foi baseado na masterclasse da rocketseat sobre Typescript</p>

Link do Video no [youtube](https://www.youtube.com/watch?v=0mYq5LrQN1s)


## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd TypeScript-MasterClass-07`;
3. Rode `yarn` dentro das pastas `backend` e `frontend` para instalar as dependências ;
4. Na pasta `backend` execute `yarn dev:server` pra iniciar o servidor de desenvolvimento;
5. Na pasta `frontend` execute `yarn start` pra iniciar o servidor de desenvolvimento;

## ⚡️ Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## Vantagens De Usar TS

1. Possibilidade de descobrir erros durante o desenvolvimento 
2. Melhor uso do Intelisense da IDE (Principalmente VSCODE)
3. Acesso a funcionalidades nao presentes no JS nativo como import/export
4. Boa manutenabilidade, já que o código "se auto explica" o que pode eliminar documentaçoes extensas ou anotaçoes. Uma funçao diz quais sao os tipos dos parametros e seu retorno.


## Desvantagens

1. Se o time de desenvolvimento não tem experiencia com TS entao o aprendizado pode ser doloroso e a produtividade cair um pouco.
2. Ao desenvolver API`s em node necessitamos fazer o monitoramento da saúde da aplicação e mapear erros e crashs. Porém, como o TS é transpilado é preciso realizar o mapeamento correto do codebase para que ferramentas como Sentry nos mostre erros relevantes e rastreavéis.
3. Integraçao do TS com Sentry e outras ferramentas adiciona mais complexidade ao processo de deploy (Ainda precisa melhorias).
4. Se seu time consegue desenvolver bem com tipagem por que não utilizar GO, .NET, Java ??
5. Minha impressão pessoal é que o código TS com React fica muito bagunçado. Com Nodejs é até organizado.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 💖 by Rocketseat 👋 [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)

