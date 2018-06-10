![Animated BrazilJS Logo](https://github.com/braziljs/braziljs-logo-2018/blob/master/animated-braziljs-logo.gif?raw=true)

# BrazilJS's logo

This is the new BrazilJS brand, announced in June 2018.  
Use this tool to customize it, to play with it, hack it, and to submit new themes.

Check the [live tool](https://braziljs.github.io/braziljs-logo-2018/) to see all the themes:
[![BrazilJS Logo customization tool](https://github.com/braziljs/braziljs-logo-2018/blob/master/braziljs-logo-tool.png?raw=true)](https://braziljs.github.io/braziljs-logo-2018/)


### Creating a new theme

Clone this project and serve it in your own _HTTP Server_, like an Apache or npm's `http-server`.  
To create a new theme, follow these steps:

**1) Add it in the `list-of-themes.js`:**

Add a new object to the list. In this object:

- name: The name for the theme
- description: A description for the theme
- className: This is the _CSS class_ added to the `.logo-container` element.
- background: A string added to the _CSS background_ of the `body` element.
- author: Add here a reference for your `github-username` or `@twitterAccount`

**2) Create the files**

Create a directory with the name of your theme (the same name you used as the **key** of your object, in the _list-of-themes.js_).  
Create a file called `index.css` in your theme's directory.

**3) Customize the elements**

Customize the elements prefixing their classes with the `className` you defined in your theme configuration in the _list-of-themes.js_.  

**4) Submit your theme**

Open a pull request submiting your theme to the main project.

### Structure

Some important notes about the _HTML_ structure:

- Both `brazil` and `S` are _SVGs_, the letter `J` and its _dash effect_ are in plain _HTML Div Elements_.
- You can add the animation `spin` to your theme to see it spining in 3D.
- Have in mind that some _3D Effects_ will behave differently in SVGs (some browsers are still buggy about it).
- The default font family used is `"Roboto Mono",monospace`, in case you are using `content` in _pseudo elements_.
- When you define a gradient or image as one of the three main _CSS variabled_, we lock the color so users can't change them in your theme.

### Colours

You can customize the colors by changing the _CSS variables_ used. They are:

- `--color-primary`
- `--color-secondary`
- `--color-third`

You can also customize them (as well as the _body's background_ from your theme config).  

> **IMPORTANT** WHen using colors (not image _URLs_ or _gradients_) in the variables, always use colors in valid formats as `#000000` or `rgba(0, 0, 0, 0)`. Do not use a short version of hex colors (like `#f90` instead of `#ff9900`). We use those formats to validate and keep the controllers up to date, and the _HTML Color Input_ do not allow the short version of hexadecimal colors.

### Transitions

All elements will animate any change using _CSS Transitions_. Feel free to customize transitions or create animations, but be careful to always apply them under your theme's _className_.

### Contributions

When submiting a new theme, you are giving us permission to use it and show it in different places. Whenever possible, we will attribute cradits to your theme.  
Your reference will stay in this repository as the _author's_ reference for the theme.

Send us your pull requests and we will approve them as we identify they are not braking any rules.

Before you submit, please be sure you follow the rules described in the _CODE_OF_CONDUCT.md_ file.

Logos/themes that are offensive, promote hate or prejudice or brake any rule or law will not be accepted.  


