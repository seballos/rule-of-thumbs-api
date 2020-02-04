# Rule of thumbs API

Api for Go Doc

### Getting started
In order to use the Api you need to install some packages

##### Install MongoDB
This is the database where the data will be stored. The needed version could be
any community. You can follow the steps described [here](https://docs.mongodb.com/master/administration/install-community/)

##### Install node and Yarn
Nodejs is the backend programing language and yarn is the package manager
The used version in the repository is 12.14.1. A useful tip is to install a node
enviroment manager, so you can easily download the proper version, these are possible candidates:

[ndenv](https://github.com/riywo/ndenv)<br>
[nodenv](https://github.com/nodenv/nodenv)<br>
[n by tj](https://github.com/tj/n)

For yarn use the usual way https://yarnpkg.com/en/docs/install

### Contribute

`git clone git@github.com:seballos/rule-of-thumbs-api.git` <br>
`yarn` <br>
`yarn dev`

##### Using

Download insomnia or postman for Rest testing and play arround with the API<br>
`localhost:8080/trial`<br>

__Test shchema__
```js
{
    "active": false,
    "name": "Jon Smit",
    "trialDueDate": "01-01-2020",
    "category": "Entretaiment",
    "description": "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
    "bgImage": "/public/images/jon.jpg",
    "stats": {
      "thumbsUp": 10,
      "thumbsDown": 1
    }
}
```
Notice the database should be created automaticaly with the name `RuleOfThumbs`. Any error or throubleshot, refer to mongodb documentation.

### Stack
Nodejs<br>
Yarn<br>
Express<br>
MongoDB


