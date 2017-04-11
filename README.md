# jQuery elementQuery
elementQuery allows you to style elements based on their parent container's changing size. You can read more about the concept in [Smashing Magazine's article](http://www.smashingmagazine.com/2013/06/media-queries-are-not-the-answer-element-query-polyfill/).

This is different from media queries in that it targets the size of a specific element, regardless of whether the window size has changed.

## Usage
After installing and loading (see below), two main features are made available, element queries (for CSS styling) and element resizing listening (for JS applications).

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
.element[max-width="900px"] {
	/* your styles for <= 900px */
}
.element[min-width="901px"] {
	/* your styles for >= 901px */
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

I could not find an elementquery plugin that did not:

- **Rely on window resize.** It seemed silly to listen for window resize events when the *element* may or may not resize as a result of that.
- **Rely on introducing scrolling elements.** These caused visible scrollbars and sluggish performance.

This plugin does not rely on either technique, so accurately reports resizes on the element itself, and only introduces a single empty iframe that shows no scrollbars and reports its resize the same way that `window` would.

Demo: http://notthatnathan.github.io/demos/jquery-elementquery/

## Installation

```
npm install jquery-elementquery --save
```

## Contributing

It would be cool to rewrite the underlying `jquery-elementresize` and this to not require jQuery. I could also use help writing some tests.

## License

MIT.
