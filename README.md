# jQuery elementQuery
Since media queries only get you so far, this plugin allows you to style elements based on their parent container's changing size, instead of the window's. This allows for more flexibility in styling elements independently of the browser viewport's dimensions.

Demo: http://notthatnathan.github.io/demos/jquery-elementquery/

##Usage
After installing and loading (see below), two main features are made available, element queries (for CSS styling) and element resizing listening (for JS applications).

`px` is the only supported unit at this time.

###Element Query
####Basic
```js
// js, pass an array of your queries
$('.element').elementQuery(['max-width: 900', 'min-width: 901']);
```
```css
// css, use max-width, min-width, max-height, or min-height attribute selectors
// be sure to include the 'px'
.element[max-width="900px"] {
  //your styles for <= 900px
}
.element[min-width="901px"] {
  //your styles for >= 901px
}
```

####With a callback
```js
// js
$('.element').elementQuery(['min-width: 800'], function(dims) {
  //dims contains current width and height
  console.log(dims.width, dims.height);
});
```

###Element Resize Listener
You can use `jquery.elementresize` alone if you only need to know about resize changes in your JavaScript and won't be using CSS. After requiring or loading jquery.elementresize only:
```js
$('.element').on('elementResize', function() {
  console.log($(this).width(), $(this).height());
});

// You can also use the plugin wrapper instead of the event,
// if you're more comfortable with that syntax
$('.element').elementResize(function() {
  console.log($(this).width(), $(this).height());
});
```

If resizing listening is the only functionality you'll need in your entire project (no 'element query' CSS), don't use this plugin, use [jquery-elementresize](https://github.com/rbtbar/jquery-elementresize) instead.

#Installation
##Install using Bower
Dependencies will be installed for you.
```
bower install jquery-elementquery --save
```

##Install without Bower
This plugin depends on the excellent [jquery-elementresize](https://github.com/rbtbar/jquery-elementresize) by [Robert Bar](https://github.com/rbtbar).

- Download or clone [jquery-elementresize](https://github.com/rbtbar/jquery-elementresize)
- Download or clone jquery-elementquery (this repo)

##Loading the plugin
```html
// plain js, assuming jQuery is already loaded
<script src="[path]/jquery.elementresize.js"></script>
<script src="[path]/jquery.elementquery.js"></script>
```
```js
// or in an AMD module
require('[path]/jquery.elementresize');
require('[path]/jquery.elementquery');

// CommonJS also supported
```

When using AMD, I recommend making `jquery.elementresize` a dependency using a shim.
```js
requirejs.config({
  shim: {
    '[path]/jquery.elementquery': {
			deps: ['jquery','[path]/jquery.elementresize']
		}
	}
});

// then only require jquery.elementquery in your AMD module
require('[path]/jquery.elementquery');
```
