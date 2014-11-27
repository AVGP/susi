# SuSi<sup>2</sup>
## Because static site generation shouldn't be rocket science.


This is the **Su**&#8203;per **Si**&#8203;mple **Si**&#8203;te generator.

You give it markdown files and (if you fancy) an HTML layout to render them into - and it gives you static HTML.

That's it.
No magic, no fancy build tools - Markdown and HTML. Now go and make that website!

![](https://googledrive.com/host/0B9MEoZDi5-peRTF3WE0tQmhIT0U/SuSi.gif)

## How to use it

To setup, you run

```shell
    npm install -g susi
```

and then to parse markdown files into HTML you can use for example:

```shell
    susi /var/www/markdown /var/www/html
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
      <title>{{title}}</title>
    </head>
    <body>
      <nav>
        <ul>
          <li><a href='home.html'>Home</a></li>
          <li><a href='projects.html'>Projects</a></li>
          <li><a href='contact.html'>Contact</a></li>
      </nav>
      <section id="main">{{contents}}</section>
    </body>
  </html>
```

When you pass in the path to this files directory as the third parameter, SuSi will render each markdown file into the place of ``{{contents}}``.
So if you do:

```shell
  susi input/ output/ path/to/layout/
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

Each markdown file is expected to have a 

### Using Frontmatter

Each markdown file is expected to have a a frontmatter section formatted in JSON like so:
```json
{
  "title": "new site gen",
  "date": "2014-11-27",
  "layout:" "page"
}
```

Note a triple dash '---' on a new line is **required** to seperate the frontmatter from the markdown formatted text.

The layout attribute will be used to look for a file with a matching name and ".html" suffix in the directory
specified as the third parameter on the commandline to susi.

Of course additional, custom attributes can be optionally included in the frontmatter json and can then be used 
in all the html layout files using the handlebars style syntax.

### Simple Includes

The html layout files can use the Apache SSI style html comment "include" directive to pull in other layout files
to provide basica support for "partials", eg.

```html

 <!--#include virtual="meta.html" -->
 
 <!--#include virtual="header.html" -->
 
    <div class="container">
      <div class="starter-template">
        <h1>{{title}}</h1>
        <p class="lead">
          {{contents}}
        </p>
      </div>

    </div><!-- /.container -->
    
    <!--#include virtual="footer.html" -->
```

Note that the included files can use the handlebars syntax as well, as they will be resolved after all the include directives
have been processed.

Now, seriously, go make static websites!
