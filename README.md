# BrazilJS's logo

This is the new BrazilJS brand, announced in June 2018.  
Use this tool to customize it, to play with it, hack it, and to submit new themes.

Check the [live tool](https://braziljs.github.io/braziljs-logo-2018/) to see all the themes:

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

### Colours

You can customize the colors by changing the _CSS variables_ used. They are:

- `--color-primary`
- `--color-secondary`
- `--color-third`

You can also customize them (as well as the _body's background_ from your theme config).  

### Transitions

All elements will animate any change using _CSS Transitions_. Feel free to customize transitions or create animations, but be careful to always apply them under your theme's _className_.

### Contributions

When submiting a new theme, you are giving us permission to use it and show it in different places. Whenever possible, we will attribute cradits to your theme.  
Your reference will stay in this repository as the _author's_ reference for the theme.

Send us your pull requests and we will approve them as we identify they are not braking any rules.

Before you submit, please be sure you follow the rules described in the _CODE_OF_CONDUCT.md_ file.

Logos/themes that are offensive, promote hate or prejudice or brake any rule or law will not be accepted.  


