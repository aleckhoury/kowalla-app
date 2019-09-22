# Kowalla

### Description
> Kowalla is the world's first online coworking space. It has a reddit-like structure,
> meaning that users have a home feed of content built from projects and spaces that
> they subscribe to. Users can create posts _within_ spaces or _as_ projects using a
> WYSIWYG interface and custom integrations to showcase their work to others.

### Purpose

> Talented, ambitious entrepreneurs are distributed equally all across the world,
> but the resources and community for them to be successful are often concentrated
> only in major startup hubs like Austin, San Francisco, New York, etc. Kowalla is
> a platform for entrepreneurs to showcase their work and connect with others all
> across the world, ending the need for startup hubs entirely.

### App Overview

```
This app is built using [Vue](https://vuejs.org/), [Nuxt.js](https://nuxtjs.org), and [Buefy](https://buefy.org/documentation)

Highlights:
- Full sitemap in pages directory (Nuxt generates the vue router on build)
- The app uses Vuex to track authentication
- Requests are made using axios with a nuxt plugin appending the auth token to requests.
- Local styles are contained within their components, while framework overrides and global styles
are in css > main.css

Hazards:
- Any magic happening that you can't trace is probably some Nuxt
configuration happening behind the scenes. Check out nuxt.config.js, as well as the plugins,
mixins, middleware, and layout directories if something doesn't make sense.
- There are many instances of duplicate code and strange patterns here due to two junior
devs originally working on this with two very different coding styles.
- The nature of Nuxt being SSR means that some libraries may not work as expected,
you can see this especially when you see some imports being dependent on the existencce of
"process.browser"
- Many parts of the codebase are likely more complex than they need to be,
for reasons listed above. Please feel free to question the necessity of everything you see,
and ask why it's a certain way. Not that it will all get fixed, but at least to document for now.
```


### Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```