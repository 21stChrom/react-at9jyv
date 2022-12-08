1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;
 
// serve static files built by React
app.use(express.static(path.join(__dirname, "test-app/build")));
 
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "test-app/build", "index.html"));
});
 
app.listen(port, () => {
  console.log('Server started on: ' + port);
});