# Font Awesome SASS Extension

[Font Awesome](http://fontawesome.io/) is very good css library for icons.  

## Few challenges to work with plain font-awesome.css
- As per my observation we are using min 10 max 30 icons from library in project, for that we are loading unnecessary 1000 lines of code.
- It has html dependencies which is very difficult for maintenance. And increase one extra element. 
- We can’t customise it. eg. can’t add in any elements.

## Solution on this challenges 
Use this extension and load only icon which you are required and where you want required, for your projects.

### How to Use 

**Step 1**
```sass
@import "1-tools/_fonts"
@import "3-modules/_font-awesome"
```

**Step 2**
```sass
.amazon
  &:before
    +fa('fa-amazon')
      //Custom style for this icon 

.accordion
  li
    &:after
      +fa('fa-angle-right')
        //Custom style for this icon 
        float: right
```

