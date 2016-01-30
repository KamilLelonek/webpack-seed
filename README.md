# typescript-webpack-seed

## Prerequisites

Makre sure you have [NodeJS](https://nodejs.org/download/) installed.

## Installation

To install all of the required dependecies run:

    npm i

Your application should be ready to run now.

## Run

You can run app server in two modes.

### Development

This is the simples way to get started.

    npm run dev-server

and visit [http://127.0.0.1:8080/](http://127.0.0.1:8080/) unless it won't open automatically.

### Production

You need to do two steps to start application in production mode.

1. Bundle application

        npm run build

  This will create appropriate `build` directory.

2. Start production server

        npm start

   And visit [http://localhost:8000/](http://localhost:8000/).
