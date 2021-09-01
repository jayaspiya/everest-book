# everest-book
[Unicons](https://antonreshetov.github.io/vue-unicons/)
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Reponsive Code
```scss
body {
    background: $base-color;
    @include tablet-view {
        background: #ff0fff;
      }
    @include mobile-view {
      background: #00ffff;
    }
}
```

```css
/* Tablet View */
@media only screen and (max-width: 768px) {
  body {
    background: #ff0fff;
  }
}
/* Mobile View */
@media only screen and (max-width: 576px) {
  body {
    background: #00ffff;
  }
}
```