# plugins 用途

用來整合第三方套件或是程式庫 (libraries)

## provide 

範例為 hello.js

Look at the [Nuxt 3 documentation](https://vuejs.org/api/application.html#app-provide) to learn more.

## directive 

```javascript
import { createApp } from 'vue'

const app = createApp({
  /* ... */
})

// register (object directive)
app.directive('my-directive', {
  /* custom directive hooks */
})

// register (function directive shorthand)
app.directive('my-directive', () => {
  /* ... */
})

// retrieve a registered directive
const myDirective = app.directive('my-directive')
```

範例為 timeFormat.js

Look at the [Nuxt 3 documentation](https://vuejs.org/guide/reusability/custom-directives.html) to learn more.