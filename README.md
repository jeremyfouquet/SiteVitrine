# Site_vitrine

Pour voir le rendu suivre le lien => [Site](https://jeremyfouquet.github.io/SiteVitrine.gthub.io/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.10.


## Requirements

### NPM
Upgrade to npm 6

## Local installation
```
npm install
npm run start:[dev/prod]:[jit/aot] (start:dev:jit by default)
[or]
npm run build:[dev/prod]:[jit/aot] (build:prod:aot by default)
```
And go to localhost:4200 (default port, otherwise see logs in the console)

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
