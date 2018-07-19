# Dog Imgur Browser

This app is a React-Redux app with a Ruby on Rails API and Imgur API backend. To persist data in Rails API, this app uses PostgreSQL. The purpose of this app is to allow users to browse through thousands of dog photos from Imgur and keep their favorites on a local API without having to log in or make an account on Imgur.

# Installation

## API

First, make sure you have [PostgreSQL](https://www.postgresql.org/) installed on your computer.

Once you have that step completed, clone the repo on your local drive.

In your terminal, cd into the dog-imgur-browser-api.

Make sure all dependencies are installed and your database is set up by typing

```
bundle install
```

Then, follow up with

```
rake db:migrate
```

Lastly, make sure to set up your server by typing

```
rails s
```

The app is set up so that it works when the API server is run first before the client so make sure to do this step before starting the client.

If configured properly, you should be able to see a running API server on http://localhost:3000/api/dogs.

## Client

Now, from the same root folder as before, dog-imgur-browser, cd into dog-imgur-browser-client.

First, have all you dependencies set up by typing

```
npm install
```

Then, run the app with the following

```
npm start
```

Since we have our API running on our default port 3000, it will ask if you want to host the app on a different port (most likely on 3001). Type "Y" in the terminal and it should automatically open up a browser for the app.
If not, make sure the client is running on http://localhost:3001/.

# Contribution

Contact mk4555@nyu.edu for any contribution

# License

This project has been licensed under the MIT open source license.
[MIT](LICENSE.md)
