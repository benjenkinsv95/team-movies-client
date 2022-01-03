[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Auth

In this lesson, we will learn how to create components for authentication on the front end. The end result, will be similar to the [react-auth-template](https://git.generalassemb.ly/seir-flex-831/react-auth-template) you will be provided for your third and fourth projects.

## Prerequisites

- [react-hooks](https://git.generalassemb.ly/seir-flex-831/react-hooks)
- [react-crud](https://git.generalassemb.ly/seir-flex-831/react-crud)
- [react-styling](https://git.generalassemb.ly/seir-flex-831/react-styling)


## Objectives

By the end of this, developers should be able to:

- Create SignUp, SignIn, ChangePassword, and SignOut auth components.
- Prevent viewing components until the user is signed in.
- Style components using React Bootstrap.
- Make axios requests using async & await.

## Preparation

1.  Fork and clone this repository.
    [FAQ](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
1.  Create and checkout to a new branch, `training`, for your work.
1.  Install dependencies with `npm install`.
1.  Start application with `npm start`.

## Code Along - Choosing a Theme 

To make our application unique, but still look good we will use a color palette.

Explore [these color palettes](https://coolors.co/palettes/trending
) and choose one you like.

In `index.scss`, set the `$primary`, `$secondary`, and `$info` bootstrap colors to colors from your palette.

Here's an example:
```scss
// Add BEFORE Bootstrap is imported
$primary: #f4a261;
$secondary: #e9c46a;
$info: #2a9d8f;
```

> Note: If your color has a green, you might also set `$success`. If your palette has a red, you might set `$danger`

## Lab - Create a Home Component

1. In `movies/Home.js` create a `Home` **function** component. 
2. Make it display the following text `The best movie website around.
3. In `App.js` add a Route show the `Home` component at the path `/` 

## Code Along - Adding a Header Component

1. In `Header/Header

## Lab - Sign Up a User

## Code Along - Refactor SignUp Component

### Code Along - Organize Axios Calls
1. Move axios calls into `api/auth.js`

### Code Along - Style SignUp Component w/ React Bootstrap

### Code Along - Refactor Promise into Async & Await

## Lab - Sign In a User

## Code Along - Auto Sign In

In `SignUp.js`

## Lab - Change Password

## Code Along - Sign Out

## Code Along - AutoDismissAlert

## Lab - Index Movies

## Lab - Show Movie

> Note: Don't worry about editing or deleting yet. You can only edit/delete movies you have created.

## Code Along - Create Movie

## Lab - Update Movie

## Lab - Delete Movie


## About

This template is derived from GA Boston's [react-template](https://git.generalassemb.ly/ga-wdi-boston/react-template).
Most of the development dependencies, such as linters, SCSS compiler, Webpack
config, NPM scripts, etc in this repo come from there.

It includes all the components and routes needed to sign up, sign in, change
passwords, and sign out of an API built with either template linked above, with
no need for modification.

**NOTE**: You should customize the included components to suit you app! They're
provided as a guide and a bare minimum of functionality and style. Consider
changing the provided SCSS styles, modifying the auth code, improving the flash
messages, etc.

## Structure

The top-level `App` component stores the currently authenticated
user in state, as well as data related to the flash messages. `App` renders the
`Header` component, and a list of routes, each of which render a component from
`src/components`. The `src/api` directory has a component file, `auth.js`, which
contains all the needed `axios` calls pertaining to authentication.

You can follow this pattern in your app as well. For instance, if you are making
an app that keeps track of books, you might want a `src/api/books.js`, which
contains its own `axios` call pertaining to your books resource CRUD actions.
Using a separate directory within `components` for each individual component you
add makes it easy to locate and update components and has the added benefit of
making it easy to create custom styles that apply to that specific component.
To apply component specific styles, add a file to the component's directory such
as `ComponentName.scss` and then import it directly into the component with
`import './ComponentName.scss'`.  This will keep your styles modularized and
make it easier to make changes at the component level.

### Included Routes

This template comes with a handful of front-end routes that display
different components for user actions.

| Endpoint         | Component | Must Be Signed In? |
|------------------|-------------------|-------|
| `/sign-up`       | `SignUp`    | No |
| `/sign-in`       | `SignIn`    | No |
| `/change-password` | `ChangePassword`  | Yes |
| `/sign-out`        | `SignOut`   | Yes |

There is no HTTP verb listed because these are all front-end routes handled by
React. Some of these routes should not be available unless a user is signed in,
so they will redirect to the `/` page if not signed in.

## Features

### `<AutoDismissAlert />` Component

This template also already contains a component that displays user messages.
Messages are configurable via redux actions.  This component can be found in
`src/components/AutoDismissAlert/AutoDismissAlert.js`. **There is no need to add
this component to your app. It is already required in `App`.**  A single
component instance is used to manage all alerts application-wide.

The alert can be used by passing the `alertMsg` method to a rendered route.  The
`alertMsg` method expects an object with a `heading`, `message`, and a `variant` property.

Use this component in conjunction with the `messages.js` file in the same
directory to create and manage all of your application messages in one place.

The `variant` property must be a Bootstrap alert variant, as this component is merely a
wrapper around the [react-bootstrap Alert
component](https://react-bootstrap.github.io/components/alerts/).  The types it
will accept are: 'primary', 'secondary', 'success', 'danger', 'warning', 'info',
'light', and 'dark'.

 To change the duration of the message, replace `5000` with a value of your
 choice (in milliseconds) in this component's `useEffect` method.

### `src/apiConfig.js`

Just like in
[browser-template](https://git.generalassemb.ly/ga-wdi-boston/browser-template),
this file will determine whether you're in a production or development
environment and choose an API URL accordingly. Don't forget to replace the
`production` URL with your deployed API's URL.

### Bootstrap

This template includes two different implementations of the classic Bootstrap
library we know and love.

#### `bootstrap`

The first implementation of Bootstrap comes from the `bootstrap` npm package,
and provides all of the normal Bootstrap classes and styling we were able to
use with the `browser-template`. This package is included in the
`src/index.scss` file at the very top of the file. That means JSX in this
template can utilize Bootstrap classes like `btn`, `container`, `row`, etc.

See an example below:

```jsx
import React from 'react'

const AboutPage = () => (
  <div className="card">
    <div className="card-body">
      <h1 className="card-title">About Page</h1>
      <p className="card-text">There is a Bootstrap card on this page!</p>
    </div>
  </div>
)

export default AboutPage
```

> Note: Remember to use `className` not `class` in your JSX!

#### `react-bootstrap`

In addition to the classic Bootstrap classes we can plug into our JSX, this
template also comes with a special package called [`react-bootstrap`](https://react-bootstrap.github.io/).
This package allows us to use special React components that have been pre-built
according to the Bootstrap library.

Import components from the `react-bootstrap` library, then use them just like
regular components in your JSX!

See an example below:

```jsx
import React from 'react'
import Card from 'react-bootstrap/Card'

const AboutPage = () => (
  <Card>
    <Card.Body>
      <Card.Title>The About Page</Card.Title>
      <Card.Text>There is a Bootstrap card on this page!</Card.Text>
    </Card.Body>
  </Card>
)

export default AboutPage
```

## Tasks

Developers should run these often!

- `npm run start`: generates bundles, watches, and livereloads.
- `npm run deploy`: builds and deploys main branch
- `npm run nag`: runs code quality analysis tools on your code and complains.
- `npm run make-standard`: reformats all your code in the JavaScript Standard
  Style.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
