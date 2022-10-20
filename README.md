:warning: This project is archived and the repository is no longer maintained. 

# cq
A minimal container query web component

<p>By <a href="https://scottjehl.com">Scott Jehl</a></p>

This `c-q` custom element enables very simple "min-width" container queries, allowing you to adjust its CSS based on its own rendered width instead of viewport width.

## Example:
https://codepen.io/scottjehl/pen/NWrdRQv

## Usage

1. Wrap a `<c-q></c-q>` element around your HTML and add any classes or attributes you might need to it, such as `<c-q class="my-content"></cq>`. 
2. Load the JavaScript module `<script src="path-to/cq.js" type="module"></script>`
3. Start writing the CSS...

To use, set a given `c-q`'s `--breakpoints;` custom CSS property to one or more pixel-based breakpoint widths that the JS should be aware of, like this:

```css
c-q { --breakpoints: "400 600 800"; }
```

One or more of these values will appear in the element's `data-min-width` attribute when they are greater or equal to the element's rendered width. You can style the element based on their presence using the `~=` attribute selector, like this:

```css
c-q[data-min-width~="400"] { background: green; }
```



