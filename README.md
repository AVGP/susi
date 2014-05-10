# SuSiSi
## Because static site generation shouldn't be rocket science.


This is the **Su**&#8203;per **Si**&#8203;mple **Si**&#8203;te generator.

You give it markdown files and (if you fancy) an HTML layout to render them into - and it gives you static HTML.

That's it.
No magic, no fancy build tools - Markdown and HTML. Now go and make that website!

## How to use it

To setup, you run

```shell
    npm install -g susisi
```

and then to parse markdown files into HTML you can use for example:

```shell
    susisi /var/www/markdown /var/www/html
```

## Using a layout

Now parsing naked Markdown files into naked HTML often isn't enough, so there's the layout option.

### A basic layout
Say you have a layout with a few navigation links and some css like this:

```html
  <!doctype html>
  <html>
    <head>
      <link rel="stylesheet" href="style.css">
      <title>My Site</title>
    </head>
    <body>
      <nav>
        <ul>
          <li><a href='home.html'>Home</a></li>
          <li><a href='projects.html'>Projects</a></li>
          <li><a href='contact.html'>Contact</a></li>
      </nav>
      <section id="main">{{CONTENT}}</section>
    </body>
  </html>
```

When you pass in the path to this file as the third parameter, SuSiSi will render each markdown file into the place of ``{{CONTENT}}``.
So if you do:

```shell
  susisi input/ output/ path/to/layout.html
```

A markdown file like this:

```markdown
  # Home
  Some *text*
```

will be rendered into:

```html
  <!doctype html>
  <html>
    <head>
      <link rel="stylesheet" href="style.css">
      <title>My Site</title>
    </head>
    <body>
      <nav>
        <ul>
          <li><a href='home.html'>Home</a></li>
          <li><a href='projects.html'>Projects</a></li>
          <li><a href='contact.html'>Contact</a></li>
      </nav>
      <section id="main">
        <h1>Home</h1>
        <p>Some <em>text</em></p>
      </section>
    </body>
  </html>
```

which is pretty handy.

### Using titles
There is also a second placeholder, ``{{TITLE}}`` which can be used to adjust the title for pages individually.

Here is an example:

```html
  <!doctype html>
  <html>
    <head>
      <link rel="stylesheet" href="style.css">
      <title>My Site {{TITLE}}</title>
    </head>
    <body>
      <nav>
        <ul>
          <li><a href='home.html'>Home</a></li>
          <li><a href='projects.html'>Projects</a></li>
          <li><a href='contact.html'>Contact</a></li>
      </nav>
      <section id="main">
        <h1>Home</h1>
        <p>Some <em>text</em></p>
      </section>
    </body>
  </html>
```
in combination with

```markdown
  <!-- - Home -->
  # Home
  Some *text*
```

will turn the title into ``My Site - Title``.
**Note:** The comment must be the first thing on the first line of your markdown file or title injection will not work.

Now, seriously, go make static websites!