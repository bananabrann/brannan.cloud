import type { BlogPost } from "$lib/interfaces/BlogPost.interface";
import type { BlogPostTag } from "$lib/interfaces/BlogPostTag.interface";

const tutorialTag: BlogPostTag = { name: "tutorial" };
const opinionTag: BlogPostTag = { name: "opinion" };
const newsTag: BlogPostTag = { name: "news" };

export const posts: Array<BlogPost> = [
  {
    slug: "importance-of-lorem",
    summary: "The Importance of Lorem",
    tags: [tutorialTag],
    title: "Welcome to my blog",
    htmlContent: "<p>This is my first post<p>"
  },
  {
    slug: "hello-world",
    summary: "Lorem, Lorem, and Lorem",
    title: "Hello world",
    tags: [opinionTag],
    htmlContent: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt consequat purus, vel malesuada est lacinia at. Praesent pulvinar orci vitae justo blandit, eu bibendum diam eleifend. Vivamus tempor vestibulum quam eu sagittis. Nam ex erat, facilisis vel enim non, venenatis tempor felis. Aliquam non magna feugiat, elementum nisi ut, vulputate sapien. Nam varius quam at quam luctus faucibus. Aliquam euismod tortor ac odio suscipit, eget elementum sapien iaculis.</p><p>Nulla blandit turpis sed elit malesuada aliquam. Vivamus sollicitudin lectus in sem fermentum porttitor. Sed ut efficitur lacus. Aenean sed scelerisque nunc. Sed consectetur congue ipsum sit amet bibendum. Morbi ac enim arcu. Aliquam erat volutpat. Nam eu aliquam nisi. Duis in justo risus. Pellentesque tincidunt fermentum vestibulum. Quisque vitae interdum eros.</p><br /><pre><code><!DOCTYPE html>
      <html>
      <head>
          <title>The Importance of Lorem Ipsum</title>
          <link rel="stylesheet" type="text/css" href="style.css">
      </head>
      <body>
          <header>
              <h1>The Importance of Lorem Ipsum</h1>
          </header>
          <main>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt consequat purus, vel malesuada est lacinia at. Praesent pulvinar orci vitae justo blandit, eu bibendum diam eleifend. Vivamus tempor vestibulum quam eu sagittis. Nam ex erat, facilisis vel enim non, venenatis tempor felis. Aliquam non magna feugiat, elementum nisi ut, vulputate sapien. Nam varius quam at quam luctus faucibus. Aliquam euismod tortor ac odio suscipit, eget elementum sapien iaculis.</p>
              <p>Nulla blandit turpis sed elit malesuada aliquam. Vivamus sollicitudin lectus in sem fermentum porttitor. Sed ut efficitur lacus. Aenean sed scelerisque nunc. Sed consectetur congue ipsum sit amet bibendum. Morbi ac enim arcu. Aliquam erat volutpat. Nam eu aliquam nisi. Duis in justo risus. Pellentesque tincidunt fermentum vestibulum. Quisque vitae interdum eros.</p>
          </main>
          <footer>
              <p>&copy; 2022 Lorem Ipsum Blog. All rights reserved.</p>
          </footer>
      </body>
      </html> </code></pre>`
  }
];
