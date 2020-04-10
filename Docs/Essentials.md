## NodeJS essential development concepts

###  Define all application dependencies
1. package.json

        npm init -y # new package.json file

        {
          "scripts": {
              // define commands here
          },
          "dependencies": {
              // define app dependencies here
          },
          "devDependencies": {
              // define development dependencies here
          }
        }

###  Defines all configuration for babel which helps compile latest JS code into older format.
2. .babelrc

        {
        "presets": [
            [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "corejs": 3
            }
            ]
        ],
        "comments": false,
        "env": {
            "production": {
            "presets": ["minify"]
            }
        }
        }

2.1 "@babel/preset-env" -> Set of fixed plugins that help transform most of the code from latest version to old version
2.1.1  "corejs": 3-> Since babel v7.4 we can use corejs v3 to help polyfill the code
2.1.2 "useBuiltIns": "usage" -> Apply polyfills to some ES6 features dynamically into files where they are used

2.2  "comments": false -> Remove comments when transforming code

2.3 "presets": ["minify"] -> When 'NODE_ENV' env is set to 'production' babel will minify the transformed code (requires babel-preset-minify)

## eslint rules
### Eslint enforces certain rules and regulations upon the code quality using builtin and third party plugins like 'airbnb-base'
### Requies eslint to be installed globally
### The below config was generared using 'eslint --init' command
3. .eslintrc.json

        {
            "env": {
                "browser": true,
                "commonjs": true,
                "es6": true
            },
            "extends": [ 
                "airbnb-base"
            ],
            "globals": {
                "Atomics": "readonly",
                "SharedArrayBuffer": "readonly"
            },
            "parserOptions": {
                "ecmaVersion": 2018
            },
            "rules": {
                "no-console": 0,
                "linebreak-style": 0
            }
        }
3.1 "ecmaVersion": 2018 -> What version of JS are you using for development?
3.2 "no-console": 0 -> airbnb eslint does not allow console.log, by setting this to 0 we disable this checking
                  1 -> warning
                  2 -> error