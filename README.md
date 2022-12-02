[![Toxin CI](../../actions/workflows/develop.yml/badge.svg)](../../actions/workflows/develop.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/1e53bf3d974d0a8facc1/maintainability)](https://codeclimate.com/github/Ligalaiz/toxin/maintainability) [![Netlify Status](https://api.netlify.com/api/v1/badges/b6d71e8d-ea2b-40be-86e8-cbfc34a9bc62/deploy-status)](https://app.netlify.com/sites/ligalaiz-toxin/deploys)


## Toxin - hotel booking website.
Demo: [Link](https://ligalaiz-toxin.netlify.app/landing.html/)

## Tech Stack

JS, SCSS, PUG

## Environment Variables

## Run Locally

Clone the project

```js
  gh repo clone Ligalaiz/toxin
```

Go to the project directory

```bash
  cd toxin
```

Install dependencies

```bash
  npm install
```

Start the server and client

```bash
  npm run start:client
```

## Running Tests

To run tests, run the following command

```js
  npm run test
```

## Running Lint

To run lint, run the following command

```js
  npm run lint
```

## Deployment

To run deploy, run the following command

```js
  npm run build
```

## Project structure

```
├── src/                             # Исходники
│   ├── assets/                      # Подключаемые ресурсы
│   │   ├── fonts/                   # Шрифты используемые в проекте
│   │   ├── img/                     # Изображения используемые в проекте
│   │   └── styles/                  # Стили
│   │       ├── global/              # Папка с глобальнымистилями
│   │       │   ├── _global.scss     # Файл с глобальными стилями
│   │       │   └── _fonts.scss      # Файл с подлючаемыми шрифтами
│   │       └── internals/           # Дополнения
│   │          ├── _mixins.scss      # Файл с миксинами
│   │          └── _variables.scss   # Файл с переменными
│   ├── components/                  # Папка с компонентами
│   ├── internals/                   # Дополнения
│   ├── layouts/                     # Папка с шаблонами
│   └──  pages/                       # Папка страниц проекта
├── config/                          # Конфигурация Webpack
|    ├── webpack.common.js           # Базовая конфигурация Webpack.js
|    ├── webpack.dev.js              # Конфигурация для dev сборки
|    └── webpack.prod.js             # Конфигурация для production сборки
├── .browserslistrc                  # Конфигурация Browserslist
├── .editorconfig                    # Конфигурация IDE
├── .env                             # Environment Variables
├── .eslintignore                    # Список исключённых файлов из ESLint
├── .eslintrc.js                     # Конфигурация проверки JS в ESLint
├── .gitignore                       # Список исключённых файлов из Git
├── .gitattributes                   # Конфигурация GIT по отношению к путям
├── .npmrc                           # Конфигурация npm
├── .prettierignore                  # Список исключённых файлов из Prettier
├── .projections.json                # Конфигурация отношений между файлами
├── babel.config.js                  # Конфигурация компиляции Javascript в es5
├── jest.config.js                   # Конфигурация Jest
├── LICENSE                          # Файл лицензии
├── package.json                     # Список модулей и прочей информации
├── postcss.config.js                # Конфигурация компиляции стилей
├── prettier.config.js               # Конфигурация форматирования кода
└── README.md                        # Файл описания проекта
```
