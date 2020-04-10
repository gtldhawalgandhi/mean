# MAKE SURE YOU ARE INSIDE YOUR PROJECT FOLDER BEFORE RUNNING ANY COMMANDS

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

## Install npx globally 

npm install -g npx

or 

yarn global add npx

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

## Run using scripts

npm run exec
npm run watch

## Homework
## Read a file and output its content in the console using node and babel
1. Path to file
2. App will read the path and  out the content in the console
3. One file read functionality
4. Second file output the contents of the file