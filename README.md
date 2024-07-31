
# Pokémon Go Tier List

## Sumário
1. [Descrição](#descrição)
2. [Funcionalidades](#funcionalidades)
3. [Uso e Exemplos](#usoexemplos)
4. [Instalação Local](#instalação-local)
5. [Stack Utilizada](#stack-utilizada)
6. [Reconhecimentos](#reconhecimentos)
7. [Projetos Relacionados](#projetos-relacionados)
8. [Contribuindo](#contribuindo)
9. [Licença](#licença)
10. [Contato](#contato)

## Descrição

O projeto "Pokémon Go Tier List" fornece uma lista detalhada dos melhores Pokémon para PVE no Pokémon Go, ranqueados por tiers. Ele permite filtrar os Pokémon por tier e tipo, e fornece informações sobre os melhores golpes para cada Pokémon. O site é acessível em qualquer dispositivo, seja celular, tablet ou computador.

## Funcionalidades

- Ranking de Pokémons por Tier
- Filtros por Tier e Tipo
- Detalhamento dos melhores golpes para cada Pokémon

## Uso/Exemplos

Visite o site e use os filtros para encontrar os melhores Pokémons para o seu PVE. Você pode filtrar por tier e tipo e consultar detalhes sobre os melhores golpes para cada Pokémon.

## Instalação local

Não é necessário instalar nada. O projeto é um site acessível diretamente pelo seu navegador. Visite [site](link.site/aqui) para acessar a lista.

Caso deseje instalar localmente o projeto, siga o [guia de contribuição](#1-configuração-do-ambiente)

## Stack utilizada

- **Framework**: Next.js
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS, React-Icons
- **Notificações**: React-Toastify
- **Testes**: Vitest

## Reconhecimentos

- O conteúdo deste site é baseado nas informações fornecidas pelo [PokemonGoHub](https://db.pokemongohub.net/best/raid-attackers).
- Agradecemos a [Cleyton Carvalho](https://www.instagram.com/eucreitu/) pela contribuição com a imagem do favicon e dos ícones para redes sociais.
- Reconhecemos [João Teles](https://www.linkedin.com/in/joaotelesk/) por suas valiosas sugestões que ajudaram a solucionar um problema técnico.
- A raspagem dos dados foi realizada por um [bot](https://github.com/JeffersonSimplicio/PGTierList) desenvolvido por mim.

## Projetos Relacionados

 - [Pokemon Web Scraper](https://github.com/JeffersonSimplicio/PGTierList)

## Contribuindo

Obrigado por considerar contribuir para o nosso projeto! Este guia vai te ajudar a configurar o ambiente de desenvolvimento e a contribuir de maneira eficiente.

### Requisitos

- Node.js(18.17 ou mais recente)

### 1. Configuração do Ambiente

#### 1.1 Fork do Repositório

1. Vá para o repositório no GitHub.
2. Clique no botão "Fork" no canto superior direito da página.
3. O GitHub criará uma cópia do repositório na sua conta.

#### 1.2 Clonando o Repositório

Clone o repositório forkado para o seu ambiente local:
```bash
git clone git@github.com:JeffersonSimplicio/pg_types_tierlist.git
cd pg_types_tierlist
```
#### 1.3. Instalando Dependências

Após clonar o repositório, instale as dependências do projeto:

```bash
npm i
```

#### 1.4. Configurando o Ambiente

Crie um arquivo .env.local na raiz do projeto para configurar variáveis de ambiente necessárias. Você pode usar o arquivo .env.example como referência.

```bash
cp .env.example .env.local
```

Edite o .env.local com suas próprias configurações.

### 2. Estrutura do Projeto

Entenda a estrutura do projeto para facilitar a contribuição:

- **`/app`**: Contém as páginas do Next.js. Cada página pode ter um arquivo de estilo e um arquivo de teste associado.
- **`/components`**: Contém componentes reutilizáveis. Cada componente pode ter seu próprio arquivo de estilo e arquivo de teste.
- **`/public`**: Contém arquivos estáticos, como imagens e fontes.

Estrutura padrão de uma pagina
```bash
├── about.css
├── about.test.tsx
└── page.tsx
```

Estrutura padrão de um componente
```bash
├── header.css
├── header.test.tsx
├── header.tsx
└── index.ts
```

### 3. Fazendo Alterações

#### 3.1. Criando uma Nova Branch

Antes de começar a fazer alterações, crie uma nova branch:

```bash
git checkout -b nome-da-sua-branch
```

#### 3.2. Fazendo Alterações

Faça as alterações necessárias no código. Utilize os seguintes comandos para rodar o projeto e verificar as alterações localmente:

```bash
npm run dev
```

#### 3.3. Rodando Testes

Execute os testes para garantir que suas alterações não quebrem nada:

```bash
npm test
```

#### 3.4. Adicionando e Commitando Alterações

Adicione e faça commit das suas alterações:

```bash
git add .
git commit -m "Descrição das alterações"
```

#### 3.5. Subindo a Branch e Criando um Pull Request

Envie sua branch para o repositório forkado no GitHub:

```bash
git push origin nome-da-sua-branch
```

Depois, vá até o GitHub e crie um Pull Request (PR) a partir do seu repositório forkado para o repositório original. Descreva suas alterações e explique qualquer coisa que precise ser revisada.

### 4. Revisão e Merge

Os mantenedores do projeto revisarão seu Pull Request. Eles podem pedir alterações adicionais antes de aceitar o merge. Certifique-se de responder a qualquer feedback que receber.

### 5. Dicas Adicionais

- **Documentação**: Atualize a documentação se suas alterações incluírem novos recursos ou mudanças significativas.
- **Consistência**: Siga o estilo de código e as convenções usadas no projeto para manter a consistência.
- **Comunicação**: Se tiver dúvidas, não hesite em abrir uma issue no GitHub ou entrar em contato com os mantenedores.

## Licença
Este projeto está licenciado sob a GNU General Public License v3.0. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## Contato
Para mais informações, você pode entrar em contato comigo através do [LinkedIn](https://www.linkedin.com/in/jefferson-simplicio/) ou pelo <a href="mailto:jeffersonsimplicio.js+pg_tierlist@gmail.com" target="_blank">e-mail</a>.
