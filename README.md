<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

<p align="center">
    <img style="margin-right: 6px" alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="40" />
    <img style="margin-right: 6px" alt="WordPress" src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" width="40" />
    <img style="margin-right: 6px" alt="Chakra-UI" src="https://i.ibb.co/wQRvTPb/chakra-monogram.png" width="40" />
</p>


<div align="center" style="margin-bottom: 20px">

# **GatsbyPress**
### Gatsby Starter with WordPress, Chakra-UI and PWA integration

<img  alt="GatsbyPress" src="https://github.com/ansmlc/gatsbypress/blob/master/src/static/images/GatsbyPress.png" width="100%" height="auto" />
</div>

## 🚀 Quick start


1.  **Install.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the gatsbypress starter.

    ```shell
    # create a new Gatsby site using the gatsbypress starter
    gatsby new my-app https://github.com/ansmlc/gatsbypress
    ```


2.  **Configure WordPress.**
    
  * Install and activate these plugins 
    in a live WordPress instance:

      - [WPGraphQL](https://wordpress.org/plugins/wp-graphql/)
      - [WPGatsby](https://wordpress.org/plugins/wp-gatsby/)

  * Configure following WordPress options:

      - Set permalinks to "Post name".
      - Add menus titled "gp-menu-header" and "gp-menu-footer"

  * Add some content to your WordPress site:

      - Add posts (with featured images)
      - Add tags and categories
      - Add some posts to "featured" category
      - Add some pages to menus

  * Configure MailChimp newsletter
    
      - Get the URL of POST method in MailChimp:
        Audience –> Signup Forms –> Embedded Form
      - Paste URL in gatsby-config.js

3.  **Configure GraphQL.**

    In the `gatsby-config.js` of the starter you just set up, update the plugin options for `gatsby-source-wordpress`. Change the `url` option so that it points to your WordPress instance GraphQL url. This should be the full url of your GraphQL endpoint. Eg `https://yoursite.com/graphql`


4.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-app/
    gatsby develop
    ```

    Your site is now running in development mode at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. 

5. **Customize**

    Edit the `theme.js` file to customize variables like
    colors and fonts and edit global styles of existing components

    ```shell 
    src/@chakra-ui/theme.js
    ```

## 🧐 Known limitations

...

## 🧐 What's inside?

A quick look at important files and directories you'll see in this Gatsby project.

    .
    ├── node_modules
    ├── src
        ├── @chakra-ui
        ├── components
        ├── pages
        ├── templates
        ├── static
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 💫 Deploy


<!-- AUTO-GENERATED-CONTENT:END -->
