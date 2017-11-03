FS-styles
=========

Global styles for the FamilySearch.org website. Based on the principles of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/).

## Usage

FS-styles provides both a CSS stylesheet ([dist/familysearch-styles.css](dist/familysearch-styles.css)) and a [Polymer style module](https://www.polymer-project.org/2.0/docs/devguide/style-shadow-dom#style-modules) ([fs-styles.html](fs-styles.html)) for use within Polymer web components.

```html
<!-- Option 1. Use <link rel="stylesheet"> for global styles -->
<link rel="stylesheet" href="path/to/fs-styles/dist/familysearch-styles.min.css"/>
```

```html
<!-- Option 2. Use style module for Polymer web components -->
<link rel="import" href="path/to/fs-styles/fs-styles.html"/>

<dom-module id="new-element">
  <template>
    <style include="fs-styles"></style>

    <!-- ... -->
  </template>
</dom-module>
```

## What's available?

See the pattern library at https://www.familysearch.org/frontier/styleguide/.

## Variables

There are a wide range of variables that the style guide creates, from media query sizes and break points, to colors and font sizes. These variables are available in both [Stylus](assets/css/helpers/_variables.styl) and as [CSS custom properties](assets/css/familysearch-styles.styl).

## Build

Whenever you commit code, a github pre-commit hook will automatically run `gulp build` and add any changes to the commit. This ensures that the final output is always in sync with any changes.

## Folder Organization

To help organize a large CSS code base, we have split the files into different folders. Each file is then compiled into `familysearch-styles.styl` which is what is used on the site.

*See [Architecture SASS Project](http://www.sitepoint.com/architecture-sass-project/) and [SMACSS Categorizing](http://smacss.com/book/categorizing) for more details*

Folder     | Contents
-----------|---------
Helpers    | Variables, mixins, and functions.
Elements   | Basic, indivisible building blocks of the site that include typography, HTML tags and simple class names, such as buttons.
Modules    | Groupings of Elements that form a reusable aspect of the interface, such as modals and alerts.

## License
Copyright © 2017 by Intellectual Reserve, Inc. See the LICENSE file for license rights and limitations.
