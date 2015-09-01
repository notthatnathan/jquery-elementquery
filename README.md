# jQuery elementQuery
elementQuery allows you to style elements based on their parent container's changing size, not the window's. You can read more about the concept in [Smashing Magazine's article](http://www.smashingmagazine.com/2013/06/media-queries-are-not-the-answer-element-query-polyfill/).

The difference between elementQuery and the polyfill referenced in the SM article is that this one doesn't rely solely on window resize, just the resize of the parent element.

The difference between elementQuery and the popular [css-element-queries](https://github.com/marcj/css-element-queries) (and a few others) is that no scrollable elements are introduced, which in our testing were causing visible scrollbars, intercepted drag/scroll targets, and poor performance (sometimes browser-freezing).

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
/* your .element must be positioned (relative, absolute), not static. */
.element {
	position: relative;
}
/* max-width, min-width, max-height, or min-height attribute selectors */
.element[max-width="900px"] {
	/* your styles for <= 900px */
}
.element[min-width="901px"] {
	/* your styles for >= 901px */
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
