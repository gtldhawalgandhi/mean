## MAKE SURE YOU ARE INSIDE YOUR PROJECT FOLDER BEFORE RUNNING ANY COMMANDS

## Install yarn from https://classic.yarnpkg.com/en/docs/install/#windows-stable


## If someone gives you ready made package.json file (like this one) then just run this command below 
## This will install all required local packages (Only local packages are installed)

    npm install

or 

    yarn

## But if you have to create a new package.json file then run this command

    npm init -y

## Install deps
    npm install --save-dev @babel/cli @babel/core @babel/node babel-watch @babel/preset-env

or 

    yarn add -D @babel/cli @babel/core @babel/node babel-watch @babel/preset-env

## Install npx and eslint globally 

    npm install -g npx eslint

or 

    yarn global add npx eslint

## Babel config in .babelrc file

        {
        "presets": ["@babel/preset-env"]
        // "plugins": ["@babel/plugin-transform-modules-commonjs"]
        }

## Add this inside your package.json for convenience

    "scripts": {
        "exec": "npx babel-node app.js",
        "watch": "npx babel-watch app.js"
      }

## Run using scripts using yarn/npm

    npm run exec
    npm run watch

## Running scripts using env variables

    dir=. yarn run exec # Linux
    $env:dir = 'someValue' ; yarn run exec # Windows Powershell
