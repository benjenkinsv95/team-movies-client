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

Explore [these color palettes](https://coolors.co/palettes/trending) and choose one you like.

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
2. Make it display the following text `"The best movie website around"`.
3. In `App.js` add a Route show the `Home` component at the path `/`

## Auth Routes

We will create a handful of front-end routes that display
different components for user actions.

| Endpoint           | Component        | Must Be Signed In? |
| ------------------ | ---------------- | ------------------ |
| `/sign-up`         | `SignUp`         | No                 |
| `/sign-in`         | `SignIn`         | No                 |
| `/change-password` | `ChangePassword` | Yes                |
| `/sign-out`        | `SignOut`        | Yes                |

There is no HTTP verb listed because these are all front-end routes handled by
React. Some of these routes should not be available unless a user is signed in,
so they will redirect to the `/` page if not signed in.

### Code Along - Adding a Header Component

Together we will add a `Header` component to our app.

It will show the appropriate navigation links when we are signed out or signed in.

### Lab - Sign Up a User

Now it's your turn to write a SignUp component!

As a team:

1. Create a `function` component called `SignUp` in `auth/SignUp.js` (not a class component)
2. in `App.js` add a route to show the `SignUp` component at the path `/sign-up`
3. Set up three pieces of state for the `email`, `password`, and `passwordConfirmation`
4. Create a form to enter the `email`, `password`, and `passwordConfirmation`
5. When the form is submitted make a [POST /sign-up request](https://git.generalassemb.ly/seir-flex-831/library-api/blob/main/docs/authentication.md#post-sign-up) using axios

**Bonus:**

5. After a user is created, navigate to the home page.

### Code Along - Refactor SignUp Component

#### Code Along - Organize Axios Calls

Together let us refactor our axios call into the `api/auth.js` file.

We'll use [named exports](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export), so that we can export multiple auth functions from the same file.

#### Code Along - Style SignUp Component w/ React Bootstrap Form

Now we will style our SignUp component using a [React Bootstrap form](https://react-bootstrap.github.io/forms/overview/#overview).

#### Code Along - Refactor Promise into Async & Await

To simplify our code, we will refactor our promises into the [`async` & `await` syntax](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#adding_error_handling).

### Lab - Sign In a User

Now it's your turn to write a SignIn component!

As a team:

1. Create a `function` component called `SignIn` in `auth/SignIn.js` (not a class component)
2. in `App.js` add a route to show the `SignIn` component at the path `/sign-in`
3. Set up two pieces of state for the `email` and `password`
4. Create a bootstrap `Form` to enter the `email` and `password`
5. When the form is submitted make a [POST /sign-in request](https://git.generalassemb.ly/seir-flex-831/library-api/blob/main/docs/authentication.md#post-sign-in) using axios
6. After a user is signed in, navigate to the home page.

**Bonus:**

7. After signing in, use the `setUser` function to store the `user`.

> Hint: You'll need to make sure to pass down the `setUser` function as a prop to `SignIn` in `App.js`

### Code Along - Auto Sign In

In `SignUp.js`, we will automatically sign in the user after signing up.

### Lab - Change Password

Now it's your turn to write a ChangePassword component!

As a team:

1. Create a `function` component called `ChangePassword` in `auth/ChangePassword.js` (not a class component)
2. in `App.js` add a route to show the `ChangePassword` component at the path `/change-password`. :warning: Note: Make sure to pass down the `user` as a prop for their `token`.
3. Set up two pieces of state for the `oldPassword` and `newPassword`
4. Create a bootstrap `Form` to enter the `oldPassword` and `newPassword`
5. When the form is submitted make a [PATCH /change-password request](https://git.generalassemb.ly/seir-flex-831/library-api/blob/main/docs/authentication.md#patch-change-password) using axios
6. After the password is changed, navigate to the home page.

**Bonus:**

7. If the user isn't signed in, navigate to the home page.

### Code Along - Sign Out

Together we will create a SignOut component that makes an axios call to [POST /sign-out](https://git.generalassemb.ly/seir-flex-831/library-api/blob/main/docs/authentication.md#delete-sign-out).

### Code Along - AutoDismissAlert

We will create a component that displays user messages.
This component will be written in
`src/components/AutoDismissAlert/AutoDismissAlert.js`. A single
component instance is used to manage all alerts application-wide.

To display messages, we will create an `alertMsg` function together. The alert can be used by passing the `alertMsg` method to a rendered route. The
`alertMsg` method expects an object with a `heading`, `message`, and a `variant` property.

Use this component in conjunction with the `messages.js` file in the same
directory to create and manage all of your application messages in one place.

The `variant` property must be a Bootstrap alert variant, as this component is merely a
wrapper around the [react-bootstrap Alert
component](https://react-bootstrap.github.io/components/alerts/). The types it
will accept are: `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`,
`'light'`, and `'dark'`.

## Bonus: Authenticated Movies CRUD

### Bonus: Lab - Index Movies

- Browser
- cURL / postman
- React

### Bonus: Lab - Show Movie

- Browser
- cURL / postman
- React

> Note: Don't worry about editing or deleting yet. You can only edit/delete movies you have created.

### Bonus: Code Along - Create Movie

- cURL
- React

### Bonus: Lab - Update Movie

- cURL
- React

### Bonus: Lab - Delete Movie

- cURL
- React

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
