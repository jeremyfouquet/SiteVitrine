# Site_vitrine visible ici(https://jeremyfouquet.github.io/SiteVitrine.gthub.io/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.


## Requirements

### NPM
Upgrade to npm 6

## Configuration (REQUIRED FOR ALL NEW PROJECTS)

### Application
1. Create a new file ```config.json``` in /src/config
2. Configure application parameters by following examples in ```config.json.example```

## Local installation
```
npm install
npm run start:[dev/prod]:[jit/aot] (start:dev:jit by default)
[or]
npm run build:[dev/prod]:[jit/aot] (build:prod:aot by default)
```
And go to localhost:4200 (default port, otherwise see logs in the console)

## Install pre-commit script
```
$ vim .git/hooks/pre-commit
```
```
#!/usr/bin/env bash

npm run build
PASS=$?

if [ ${PASS} == 0 ]; then
    npm run lint
    PASS=$?
fi

if [ ${PASS} != 0 ]; then
    echo "Compilation or lint failed. Please fix it, and try to commit again."
    exit 1;
fi
```
```
$ chmod +x .git/hooks/pre-commit
```

## Lint
```
npm run lint
```

## Unit Tests
```
npm run test
```

## End to End Tests
```
npm run e2e
```

## Angular Style Guide
https://confluence.advanced-schema.com/display/AG/Angular2+Style+Guide

## Add new elements in icons font
Copy new svg(s) inside custom-fonts/icons/svg
```
npm run font-compiler icons
```

## Generate new Custom font
Copy custom-fonts/icons folder in custom-fonts/[new_font_name]
Edit custom-fonts/[new_font_name]/fontcustom.yml file by following Font Specificities indications
Replace custom-fonts/[new_font_name]/svg content with your svgs
```
npm run font-compiler [new_font_name]
```
