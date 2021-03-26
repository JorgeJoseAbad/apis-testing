### Api-testing

Little exercise node/express (made with express-generator) to test an api:

The api this code are pointing to is this:

[https://my-json-server.typicode.com/jorgejoseabad/fake-apis](https://my-json-server.typicode.com/jorgejoseabad/fake-apis)

which is in my repository:  

https://github.com/JorgeJoseAbad/fake-apis

I retrieve data from the API using fetch. From the routes of my local server. Then I display the data in ejs views. A javascript code is also used as a demo. To do this, you need the node-fetch package.

Other packages are:

- body-parser
- cookie-parser
- debug
- ejs
- express
- file-type (not finally)
- morgan
- node-fetch
- serve-favicon

### Usage
This code is a demo. You can download it or fork.
then:

```
npm install
```
```
npm start
```

Please take in mind the line
```
"start": "nodemon --inspect ./bin/www"
```
In package,json, you need nodemon and chrome inspector You can change it...

```
"start": "node ./bin/www"
```
