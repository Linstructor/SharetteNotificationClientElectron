# SharetteNotificationClientElectron

Moved to https://bitbucket.org/Linstructor/sharettenotification/src

**SharetteNotification**

SharetteNotification is a software created to share mobile notification with a computer.

Developped with Node.js and Electron for the Desktop part.

## Getting Started

Actually not compatible with Mac OS and Windows due to incompatibility. Server are set up with docker-compose.

## Prerequistes

Things you need to have installed to run the projects :

```
Docker compose
Node.js v10.2.1
npm 6.1.0
```


### Installing and running

To install project:

```javascript
npm install
```

To run the project:

```javascript
/*To run only desktop client with no HMR or hot-reload*/
npm run electron

/*To run desktop client WITH HMR and hot-reload*/
npm run start-client

/* You can run webpack hot-reload/HMR without the client*/
npm run bundle-hot

/* To run server with hot-reload*/
npm run api

/* To run everything in development*/
npm run start-dev
```


## Versionning

- [Electron](https://electronjs.org/) - The desktop client library

- [React](https://reactjs.org/) - Front-end framework

- [Redux](https://redux.js.org/) - Used with React to simplify state

- [GraphQl](https://graphql.org/) - Simplify query to the api

- [Material-ui](https://material-ui.com/) - Framework Css to stylish the app

## Versionning

|   Commit type              | Emoji                                         |
|:---------------------------|:----------------------------------------------|
| Initial commit             | :tada: `:tada:`                               |
| Version tag                | :bookmark: `:bookmark:`                       |
| New feature                | :sparkles: `:sparkles:`                       |
| Bugfix                     | :bug: `:bug:`                                 |
| Metadata                   | :card_index: `:card_index:`                   |
| Documentation              | :books: `:books:`                             |
| Documenting source code    | :bulb: `:bulb:`                               |
| Performance                | :racehorse: `:racehorse:`                     |
| Cosmetic                   | :lipstick: `:lipstick:`                       |
| Tests                      | :rotating_light: `:rotating_light:`           |
| Adding a test              | :white_check_mark: `:white_check_mark:`       |
| General update             | :zap: `:zap:`                                 |
| Improve format/structure   | :art: `:art:`                                 |
| Refactor code              | :hammer: `:hammer:`                           |
| Removing code/files        | :fire: `:fire:`                               |
| Continuous Integration     | :green_heart: `:green_heart:`                 |
| Security                   | :lock: `:lock:`                               |
| Upgrading dependencies     | :arrow_up: `:arrow_up:`                       |
| Downgrading dependencies   | :arrow_down: `:arrow_down:`                   |
| Lint                       | :shirt: `:shirt:`                             |
| Translation                | :alien: `:alien:`                             |
| Text                       | :pencil: `:pencil:`                           |
| Critical hotfix            | :ambulance: `:ambulance:`                     |
| Deploying stuff            | :rocket: `:rocket:`                           |
| Fixing on MacOS            | :apple: `:apple:`                             |
| Fixing on Linux            | :penguin: `:penguin:`                         |
| Fixing on Windows          | :checkered_flag: `:checkered_flag:`           |
| Work in progress           | :construction:  `:construction:`              |
| Adding CI build system     | :construction_worker: `:construction_worker:` |
| Analytics or tracking code | :chart_with_upwards_trend: `:chart_with_upwards_trend:` |
| Removing a dependency      | :heavy_minus_sign: `:heavy_minus_sign:`       |
| Adding a dependency        | :heavy_plus_sign: `:heavy_plus_sign:`         |
| Docker                     | :whale: `:whale:`                             |
| Configuration files        | :wrench: `:wrench:`                           |
| Merging branches           | :twisted_rightwards_arrows: `:twisted_rightwards_arrows:` |
| Bad code / need improv.    | :hankey: `:hankey:`                           |
| Reverting changes          | :rewind: `:rewind:`                           |
| Breaking changes           | :boom: `:boom:`                               |
| Code review changes        | :ok_hand: `:ok_hand:`                         |
| Accessibility              | :wheelchair: `:wheelchair:`                   |
| Other                      | [Be creative](http://www.emoji-cheat-sheet.com/)  |

Originnal [array](https://gist.github.com/parmentf/035de27d6ed1dce0b36a) from parmentf


##DON'T FORGET THIS REPO IS NO LONGER ACTIVE, GO TO THE LINK TO SEE THE ADVANCEMENT https://bitbucket.org/Linstructor/sharettenotification/src
