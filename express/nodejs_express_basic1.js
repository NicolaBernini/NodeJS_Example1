// SERVER 
// NOTE: Express Module Load 
const express = require('express')

// NOTE: Express instantiation 
const app = express() 

// NOTE: Express Server Params 
const port = 3000 
const test_uri = "/test"

// ROUTING Definition 
app.get(test_uri, (req, res) => {
  console.log("[Server] HTTP Get Request: " + test_uri);
  res.send("Done"); 
  })



// Server Start 
app.listen(port, () => {console.log("Server Started")})




// CLIENT  
// NOTE: Module Request Load 
const request = require('request')

// Test Http Request Run 
request.get("http://localhost:" + port + test_uri, (err, res, body) => {console.log("[Client] HTTP Get Request returned --> " + body)})






