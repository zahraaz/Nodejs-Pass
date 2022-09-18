const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


const app = express();

const ads = [
  {title: 'Hello, world (again)!'}
];


app.use(helmet());

app.use(bodyParser.json());


app.use(cors());


app.use(morgan('combined'));


app.get('/', (req, res) => {
  res.send(ads);
});
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})




app.listen(4000, 'localhost', () => {
    console.log("the server link is " + 'http://localhost:4000');
}
)
