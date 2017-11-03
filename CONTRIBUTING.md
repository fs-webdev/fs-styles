# Contributing

Please adhere to the following guidelines when contributing to this project.

## Pull Request Process

1. Ensure new CSS properties are ordered alphabetically.
1. Increase version number of package.json. Use [SemVer](http://semver.org/) versioning.
    * We consider anything that changes a class name or HTML structure a breaking change.
    * Ideally, provide fallbacks so the previous major version still works while in the latest major version to make transitioning and adoption easier. These fallbacks can be removed in the next major version (E.G. things from 2.0 will still work in 3.0, but not in 4.0).
1. Update the JSDoc comments if making changes to the style guide documentation or structure.
1. When merging, follow the [AngularJS commit message convention](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#format-of-the-commit-message) to describe the type, scope, and subject of the change.

## Comments

Use comments to explain why the CSS is written the way it is, any hacks, or things that are important to keep in mind. See [The Art of Comments](https://css-tricks.com/the-art-of-comments/) for more information on what makes a good comment.

FS-styles uses [LivingCSS](https://github.com/straker/livingcss) to generate the style guide. Always remember to update the JSDoc comments when making documentation or structure changes.

We follow Harry Roberts [CSS Guidelines](https://cssguidelin.es/#commenting) commenting style recommendations as well as comments for [Table of Contents](https://cssguidelin.es/#table-of-contents) and [Titling](https://cssguidelin.es/#titling). This makes it easy to jump to a section of a file.

**NOTE:** Since FS-styles uses LivingCSSto generate the style guide, all non-documentation comments *must not* use JSDoc-like opening syntax of `/**` and instead should use a single asterisks `/*` so LivingCSS does not try to parse it as a JSDoc comment.

Example of a Table of Contents comment:

```css
/*------------------------------------*\
  $CONTENTS
\*------------------------------------*/
/*
 * CONTENTS..............Section description
 * SECTION-NAME..........Section description
 * ...
 */
```

Example of a Titling comment:

```css
/*------------------------------------*\
  $SECTION-NAME
\*------------------------------------*/
.selector { }
```

Example of low-level comments:

```css
/*
 * 1. Increase letter spacing to improve readability for users with dyslexia. Tested
 *    with a user with dyslexia.
 * 2. Default heading font to verdana and lazy load with museo
 * 3. If browser doesn't support custom properties then we won't lazy load the font
 */
h1 {
  font-family: $font-face-heading; /* [3] */
  font-family: var(--fs-font-face-heading, $font-face-heading) /* [2, 3] */
  letter-spacing: 0.06rem; /* [1] */
}
```

## Naming Conventions

When naming classes, preface all classes with `fs-` and use [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) syntax. By doing so, we completely nullify class name collision problems. Avoid needing more than 2 selectors to make overrides by the app easier.

When naming variables, start the variable name with the most generic term and end with the most specific term. This allows auto complete to grab all variables that also belong to the generic category. All CSS custom properties should be prefaced with `--fs`. For example, a variable for a blue border should be named `$color-border-blue` in Stylus and `--fs-color-blue-border` for CSS.

*See [Sass Variable Architecture](http://peteschuster.com/2014/02/sass-variable-architecture/), [Naming SASS Variables Modularly](http://webdesign.tutsplus.com/articles/quick-tip-name-your-sass-variables-modularly--webdesign-13364), and [SASS Color Variables](http://sachagreif.com/sass-color-variables/) for more details*

## Property Order

Order CSS properties in alphabetical order. It's the easiest ordering to understand without explaining and ensures that finding a property is easy.