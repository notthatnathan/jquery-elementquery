# jQuery elementQuery
elementQuery allows you to style elements based on their parent container's changing size. You can read more about the concept in [Smashing Magazine's article](http://www.smashingmagazine.com/2013/06/media-queries-are-not-the-answer-element-query-polyfill/).

This is different from media queries in that it targets the size of a specific element, regardless of whether the window size has changed.

## Usage

#### Basic
```
// pass an array of your queries
$('.element').elementQuery(['max-width: 900', 'min-width: 901']);
```
```
/* your .element must be positioned (relative, absolute), not static. */
.element {
	position: relative;
}

/* max-width, min-width, max-height, or min-height attribute selectors */
.element[max-width-900="true"] {
	/* your styles for <= 900px */
}

.element[max-width-900="false"] {
	/* your styles for > 900 */
}

.element[min-width-901="true"] {
	/* your styles for >= 901px */
}

.element[min-width-901="false"] {
	/* your styles for < 901px */
}
```

#### With a callback
```
$('.element').elementQuery(['min-width: 800'], function(dims) {

  //dims contains current width and height
  console.log(dims.width, dims.height);

  // 'this' references .element
  console.log($(this).width(), $(this).height());

});
```

## Motivation

I could not find an elementquery option that:

- **Did not rely on window resize.** It seemed silly to listen for window resize events when the *element* may or may not resize as a result of that.
- **Did not rely on introducing scrolling elements.** These caused visible scrollbars and sluggish performance.

This plugin does not rely on either technique, so accurately reports resizes on the element itself, and only introduces a single empty iframe that shows no scrollbars and reports its resize the same way that `window` would.

Demo: http://notthatnathan.github.io/demos/jquery-elementquery/

## Installation

```
npm install jquery-elementquery --save
```

## Contributing

It would be cool to rewrite the underlying this plugin and the `jquery-elementresize` to not require jQuery (under a different name). I could also use help writing some tests.

## License

MIT
