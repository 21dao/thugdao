# Community Sample App

This is a sample app that Solana communities, DAO's, and collectives can use to promote and highlight their artists work. It includes a searchable artists page and dedicate page for every artist, a live auctions page that uses the 21 daos API's to display any currently live auctions for the artists and a listing page which displays secondary listings on Exchange.Art

## Updating Artists

The primary artist data is stored in a json file in `src/data/artists/artists.json`

## Auction data

Auction data is sourced from Exchange.Art, Formfunction and Holaplex. and is fetched via the 21 dao API's

## Listing data

Listing data is fetched directly from Exchange.Art via their API.

## Getting started

This app was created using create-react-app and to get started you can run

`yarn run start`

## Deployment

Since create-react-app was used this app can be deployed as a static site fairly easily on any of the major cloud platforms like Vercel, DigitalOcean or Heroku.

## Reuse

Anyone is free to use this code according to the terms of 'The Unlicense' however please be aware that this project is still in development and breaking changes may happen.

## React

This project was created using create-react-app so just run `yarn run start` to get started.
