## Big Spender

Ever wondered how you can put into perspective just how much a billionaire can afford to spend? Wonder know more! Check it out here [http://bigspender.surge.sh/](http://bigspender.surge.sh/).

## Inspiration

I was inspired by this site [https://neal.fun/spend/](https://neal.fun/spend/) which allows you to hypothetically spend \$90,000,000,000 as if you had Bill Gates' estimated net worth at the time of creating the website.

## Why

I have been eager to use Parcel, Typescript, Redux and redux-saga middleware in the same project for a while now and this seemed like a good project to start with.

I found an API which scrapes the Forbes 400 website and returns relevant data depending on the query (thanks to **@tonibu's** recommendation). After realising I could return data for the top 10 billionaires, I decided to use this API and allow users of the application to not only choose a specific billionaire but, any billionaire from the top 10 live data on Forbes' website.

As it stands, you will have the choice of the top 10 billionaires as well as myself which I added into the last element in the array. You can change billionaire by clicking on the pulsating icon at the top of the page.

## Implementation

- The first thing I planned was the folder structure and how the application might be set out.

- Next was the Parcel setup with Typescript and the necessary tooling (eslint airbnb, prettier, husky and lint-staged.

- Then I started to design the redux store, types, actions and reducer.

- Then I started work on the saga middleware. On initial load of the page, an action will be dispatched that the saga is listening to. This triggers the saga to make an async call to a utility function I created to query the aforementioned API. The saga then dispatches 2 actions async that loads the billionaires into the global store and updates the current billionaire to be the first billionaire in the array I.e. the richest (Jeff Bezos).

- Next, I created a basic UI that would display information about the current billionaire.

- From here, I started to look into validation for buying and selling an item. So that the appropriate SCSS styles would be applied to each specific item depending on whether it could be afforded and whether there were any to sell.

- Next was displaying a card for each item in the items array in the store. Each card would be created with consideration of the validation mentioned above and contain a buy button, an input text field, and a sell button.

- The last stage was writing end-to-end tests with Cypress.

## Building and running on localhost

First, clone the project:

```sh
git clone https://github.com/chrisbmar/big-spender.git
```

Install dependencies:

```sh
yarn install
```

To run with a development env:

```sh
yarn dev
```

To create a production build:

```sh
yarn build
```

To run tests:

```sh
yarn cypress
```
