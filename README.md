# WEB701 VueJS web app 
## Install

``` bash
# install dependencies
npm install
```

## Configure firebase
``` bash 
## Add own apiKeys to:

var firebaseConfig = {
// Insert firebase apiKey

apiKey: "xxxxxxxxxxxxxxxxxx",
authDomain: "xxx.firebaseapp.com",
databaseURL: "https://xxxx.firebaseio.com",
projectId: "xxxxxxxxx",
storageBucket: "xxxxxxx.appspot.com",
messagingSenderId: "xxxxxxxxx",
appId: "xxxxxxxxxxxxxxxxxx"
};
```

## Real time database config
Add "products" child to database, open, import data "web701-eggcellent-export.json" file from /data folder

## Launch

``` bash
# Launch application - will default to "localhost:8080"
npm run serve
```