# jQuery elementQuery
Since media queries only get you so far, this plugin allows you to style elements based on their parent container's changing size, instead of the window's. This allows for more flexibility in styling elements independently of the browser viewport's dimensions.

Demo: [coming soon]

##Usage
After installing and loading (see below), two main features are made available, 

###Element Query
####Basic
```
// js
$('.element').elementQuery(['max-width: 900', 'min-width: 901']);

// css
.element[max-width="900px"] {
  //your styles for <= 900px
}
.element[min-width="901px"] {
  //your styles for >= 901px
}
```

####With a callback
```
// js
$('.element').elementQuery(['min-width: 800'], function() {
  console.log($(this).width(), $(this).height());
});
```

###Element Resize Listener
You can use `jquery.elementresize` alone if you only need to know about resize changes in your JavaScript and won't be using CSS. After requiring or loading jquery.elementresize only:
```
$('.element').on('elementResize', function() {
  console.log($(this).width(), $(this).height());
});

// You can also use the plugin wrapper instead of the envent,
// if you're more comfortable with that syntax
$('.element').elementResize(function() {
  console.log($(this).width(), $(this).height());
});
```

If resizing listening is the only functionality you'll need in your entire project (no dimension-based CSS), use [jquery-elementresize](https://github.com/rbtbar/jquery-elementresize).

#Installation
##Install using Bower
Dependencies will be installed for you.
```
bower install jquery-elementquery --save
```

##Install without Bower
This plugin depends on the excellent [jquery-elementresize](https://github.com/rbtbar/jquery-elementresize) by [Robert Bar](https://github.com/rbtbar).

– Download or clone [jquery-elementresize](https://github.com/rbtbar/jquery-elementresize)
- Download or clone jquery-elementquery (this repo)

##Loading the plugin
```
// plain js, assuming jQuery is already loaded
<script src="[path]/jquery.elementresize.js"></script>
<script src="[path]/jquery.elementquery.js"></script>

// or in an AMD module
require('[path]/jquery.elementresize');
require('[path]/jquery.elementquery');

// CommonJS also supported
```

When using AMD, I recommend making jquery.elementresize a dependency using a shim.
```
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
