[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs) [![Toxin CI](../../actions/workflows/develop.yml/badge.svg)](../../actions/workflows/develop.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/1e53bf3d974d0a8facc1/maintainability)](https://codeclimate.com/github/Ligalaiz/toxin/maintainability) [![Netlify Status](https://api.netlify.com/api/v1/badges/b6d71e8d-ea2b-40be-86e8-cbfc34a9bc62/deploy-status)](https://app.netlify.com/sites/ligalaiz-toxin/deploys)

# Toxin - hotel booking website.

## Templates

<table>
  <tr>
    <th><a href="https://ligalaiz-toxin.netlify.app/landing" target="_blank">Landing Page</a></th>
    <th><a href="https://ligalaiz-toxin.netlify.app/search" target="_blank">Search Room</a></th>
    <th><a href="https://ligalaiz-toxin.netlify.app/room-detail" target="_blank">Room Details</a></th>
    <th><a href="https://ligalaiz-toxin.netlify.app/registration" target="_blank">Registration</a></th>
    <th><a href="https://ligalaiz-toxin.netlify.app/sign-in" target="_blank">SignIn</a></th>
  </tr>

  <tr valign="top">
    <td>
      <a href="https://github.com/Ligalaiz/toxin/blob/develop/src/template/landing.jpg?raw=true" target="_blank">
        <img src="https://github.com/Ligalaiz/toxin/blob/develop/src/template/landing.jpg?raw=true?raw=true" width="250" alt="Главная страница">
      </a>
    </td>
    <td>
      <a href="https://github.com/Ligalaiz/toxin/blob/develop/src/template/search.jpg?raw=true" target="_blank"><img src="https://github.com/Ligalaiz/toxin/blob/develop/src/template/search.jpg?raw=true" width="250" alt="Страница поиска"></a>
    </td>
	<td>
      <a href="https://github.com/Ligalaiz/toxin/blob/develop/src/template/room-details.jpg?raw=true" target="_blank"><img src="https://github.com/Ligalaiz/toxin/blob/develop/src/template/room-details.jpg?raw=true" width="250" alt="Страница номера"></a>
    </td>
  <td>
      <a href="https://github.com/Ligalaiz/toxin/blob/develop/src/template/registration.jpg?raw=true" target="_blank"><img src="https://github.com/Ligalaiz/toxin/blob/develop/src/template/registration.jpg?raw=true" width="250" alt="Страница регистрации"></a>
    </td>
  <td>
      <a href="https://github.com/Ligalaiz/toxin/blob/develop/src/template/sign-in.jpg?raw=true" target="_blank"><img src="https://github.com/Ligalaiz/toxin/blob/develop/src/template/sign-in.jpg?raw=true" width="250" alt="Страница авторизации"></a>
    </td>
  </tr>

  <tr>
  <th><a href="https://ligalaiz-toxin.netlify.app/color-and-types" target="_blank">Colors & Types</a></th>
  <th><a href="https://ligalaiz-toxin.netlify.app/form-elements" target="_blank">Form Elements</a></th>
  <th><a href="https://ligalaiz-toxin.netlify.app/cards" target="_blank">Cards</a></th>
  <th><a href="https://ligalaiz-toxin.netlify.app/header-footer" target="_blank">Headers & Footers</a></th>
  </tr>

  <tr valign="top">
    <td>
      <a href="https://github.com/Ligalaiz/toxin/blob/develop/src/template/colors-type.jpg?raw=true" target="_blank">
        <img src="https://github.com/Ligalaiz/toxin/blob/develop/src/template/colors-type.jpg?raw=true" width="250" alt="Colors and fonts">
      </a>
    </td>
    <td>
      <a href="https://github.com/Ligalaiz/toxin/blob/develop/src/template/form-elements.jpg?raw=true" target="_blank"><img src="https://github.com/Ligalaiz/toxin/blob/develop/src/template/form-elements.jpg?raw=true" width="250" alt="Страница с элементами форм"></a>
    </td>
  <td>
      <a href="https://github.com/Ligalaiz/toxin/blob/develop/src/template/cards.jpg?raw=true" target="_blank"><img src="https://github.com/Ligalaiz/toxin/blob/develop/src/template/cards.jpg?raw=true" width="250" alt="Страница карточек"></a>
    </td>
  <td>
      <a href="https://github.com/Ligalaiz/toxin/blob/develop/src/template/headers-footers.jpg?raw=true" target="_blank"><img src="https://github.com/Ligalaiz/toxin/blob/develop/src/template/headers-footers.jpg?raw=true" width="250" alt="Страница с шапками и футерами сайта"></a>
    </td>
  </tr>
</table>

## Tech Stack

JS, SCSS, PUG

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
