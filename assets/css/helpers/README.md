Helpers
=========
Helpers are any utility tools or files that can be used across the site, such as colors, mixins, and functions.

# Rules
* Mixins which are triggered off of CSS properties should only be used to output vendor prefixes (such as `box-shadow` or `border-box`). This helps reduce any undesired effects when writing CSS.
* Functions should always be called using parentheses (such as `clearfix()`) and never look like a declaration. This helps developers know where the output is coming from.
* Variables should start with the most generic term and end with the most specific term (such as `$color-grey-border`). Doing so will group common variables into categories which are easier to remember and search for.