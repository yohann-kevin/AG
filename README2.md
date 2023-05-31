# ag-front

## How to install the plugin (https://www.npmjs.com/package/hygie-vue-plugins) :
```
npm i hygie-vue-plugins
```
then in the src folder in the main.js file
```
import HygieVuePlugins from 'hygie-vue-plugins';
Vue.use(HygieVuePlugins);
```

# test pluggin install main.js

```

if (Vue.prototype.$hygie) {
  console.log('hygie-vue-plugins est correctement installé.');
} else {
  console.log('hygie-vue-plugins n\'est pas installé.');
}
```

# Finally, in try catch replace console.log 

try:
```
this.$hygie.logger.info(response.data);
```

catch:
```
this.$hygie.logger.error(error);
```