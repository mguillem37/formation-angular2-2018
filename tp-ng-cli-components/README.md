# Synopsis

## Création du projet

- npm install -g @angular/cli
- npm install --save rxjs-compat //pour rxjs
- ng xi18n --output-path i18n/locale
- npm install bootstrap //+ ajout déclaration angular.json et modification de l'attribut style
- ng new tp-ng-cli-components
- pour créer un composant dans un module faire un ng g c dans le répertoire du module

## Exécution du projet

- ng server  ou npm start (cf fichier package.json)
- ou ng server --host 0.0.0.0 pour tests mobile

- ng --version

## Création d'un service

`ng generate service services/Users`


## TpNgCliComponents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
