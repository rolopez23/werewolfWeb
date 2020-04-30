//Required packages
const express = require('express');
const path = require('path');

//create default app for express
//Doc Reference https://expressjs.com/en/api.html
const app = express();

//generalized path for files
const filePath = path.join('..', 'client', 'public');
//declare port
const port = 2323;
//Set up express.static to serve up static files to site
//Doc reference expressjs.com/en/api.html#express.static
app.use(express.static('/Users/robertlopez/Desktop/extremeWW2/fullStackWWApp/client/public'));

app.get('/', (req, res)=>{
  res.send('Werewolf')
})

//listen for connections
//https://expressjs.com/en/4x/api.html#app.listen
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
