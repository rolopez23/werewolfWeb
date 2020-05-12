//Required packages
const express = require('express');
const path = require('path');

const roleList = require('../../currentRuleSets/roles.js');
const Village = require('../../villageRules/village.js')

//create default app for express
//Doc Reference https://expressjs.com/en/api.html
const app = express();

//generalized path for files
const filePath = path.join(__dirname, '..', 'client', 'public');
//declare port
const port = 2323;
//Set up express.static to serve up static files to site
//Doc reference expressjs.com/en/api.html#express.static
app.use(express.static(filePath));

app.get('/village/:players/:allowIndependants/:required', (req, res)=>{
  let {players, allowIndependants, required} = req.params;
  allowIndependants = JSON.parse(allowIndependants)
  required = JSON.parse(required);
  let requirements = [];
  requirements.push(required)
  players = JSON.parse(players);
  // console.log(requirements)
  const village = new Village(players, allowIndependants, requirements);

  res.send(village.getData());
})

app.get('/village/:players', (req, res)=>{
  // console.log(req.params)
  const village = new Village(parseInt(req.params.players));
  res.send(village.getData());
})

app.get('/roles/:team', (req, res)=> {
  // console.log(`request for ${req.params.team}`)
  const team = req.params.team;
  const roles = roleList[team].map(role=> role.roleName);
  res.send(roles);
})

//listen for connections
//https://expressjs.com/en/4x/api.html#app.listen
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

