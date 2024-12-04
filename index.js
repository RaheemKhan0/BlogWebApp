import express from "express";
import bodyParser from "body-parser";


var app = express();
var port = 3000;
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));



app.get("/", (req, res) => {
  res.render("index.ejs", {
    
  });
})

app.get("/Posts", (req, res) =>{
  var Subject = req.body.Subject;
  res.render("posts.ejs", {
    subject : Subject,
  }) 
})


app.listen(port , () =>{
  console.log(`Listening on port ${port}`);
})
