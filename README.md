# mujin-tablet

> A Vue.js project

## Build Setup
### Docker
```bash
# build
$ docker build -t mujin-tablet .

# run
$ docker run -it -p 9000:80 --rm --name mujin-tablet-app mujin-tablet
```
https://jp.vuejs.org/v2/cookbook/dockerize-vuejs-app.html

### Local
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
