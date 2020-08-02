# gatsby-plugin-no-index

---

A simple plugin that keeps your website from being indexed by search engine.


## How to use

1. Install using either npm or yarn:

```
yarn add gatsby-plugin-no-index
```

or

```
npm install gatsby-plugin-no-index
```

2. Add to ```gatsby-config.js```

```javascript
module.exports = {
  plugins: [
    `gatsby-plugin-no-index`,
  ]
}
```


```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-no-index`,
      options: {
        txt: true, // generate robots.txt for disallow indexing
      },
    },
  ],
}
```


The following `robots.txt` will be used:

```shell
User-agent: * Disallow: /
```


# Further readings

https://moz.com/learn/seo/robots-meta-directives
https://developers.google.com/search/reference/robots_meta_tag
