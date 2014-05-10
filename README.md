# SuSiSi
## Because static site generation shouldn't be rocket science.

This is the **Su**per **Si**mple **Si**te generator.

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
    susisi /var/www/markdown /var/www/html /var/www/layout.html
```

where ``layout.html`` is an HTML file with a placeholder ``{{CONTENT}}`` where the parsed markdown should be inserted.
You can leave out the third parameter as well, if you just want the raw markdown files to be parsed.