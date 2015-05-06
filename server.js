var express = require("express")
, app = express()
, http = require("http").createServer (app)
, bodyParser = require("body-parser")
/* server */
app.set("ipaddr", "0.0.0.0");
app.set("port", 3000);
app.set("views", __dirname + "/views");
app.set("view engine", "jade");

app.use(express.static("public", __dirname + "/public"));
app.use(bodyParser.json());

app.get("/test1", function(request, response) {
  response.render("index");
});

app.get("/test2", function(request, response) {
  response.render("index1");
});

app.get("/test3", function(request, response) {
  response.render("index2");
});

http.listen(app.get("port"), app.get("ipaddr"), function() {
  console.log("Server up and running. Go to http://" + app.get("ipaddr") + ":" + app.get("port"));
});
