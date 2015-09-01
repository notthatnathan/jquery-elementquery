# jQuery elementQuery
Since media queries only get you so far, this plugin allows you to style elements based on their parent container's changing size, instead of the window's. This allows for more flexibility in styling elements independently of the browser viewport's dimensions.

Demo: http://notthatnathan.github.io/demos/jquery-elementquery/

##Usage
After installing and loading (see below), two main features are made available, element queries (for CSS styling) and element resizing listening (for JS applications).

###Element Query
####Basic
```js
// pass an array of your queries
$('.element').elementQuery(['max-width: 900', 'min-width: 901']);
```
```css
/* max-width, min-width, max-height, or min-height attribute selectors */
.element[max-width="900px"] {
  //your styles for <= 900px
}
.element[min-width="901px"] {
  //your styles for >= 901px
}
```

####With a callback
```js
$('.element').elementQuery(['min-width: 800'], function(dims) {
  //dims contains current width and height
  console.log(dims.width, dims.height);
  // 'this' references .element
  console.log($(this).width(), $(this).height());
});
```

###Element Resize Listener
You can use the `elementResize` event alone.
```js
$('.element').on('elementResize', function() {
  console.log($(this).width(), $(this).height());
});
```

However, if resizing listening in JavaScript is the only functionality you'll need in your entire project (no CSS), use [jquery-elementresize](https://github.com/rbtbar/jquery-elementresize) instead of this plugin.

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
<!-- assuming jQuery is already loaded -->
<script src="[path]/jquery.elementresize.js"></script>
<script src="[path]/jquery.elementquery.js"></script>
```
```js
// or in an AMD module
require('[path]/jquery.elementresize');
require('[path]/jquery.elementquery');
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
