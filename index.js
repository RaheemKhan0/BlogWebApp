import express from "express";
import bodyParser from "body-parser";


var app = express();
var port = 3000;

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Define Subjects and Body arrays globally
let Subjects = [];
let Body = [];

const BlogBody =
  "Quantum computing is an emerging field with the potential to revolutionize the tech industry. Unlike classical computers, which process information in binary bits, quantum computers use quantum bits, or qubits, that can exist in multiple states simultaneously. This allows them to solve complex problems much faster than traditional computers. While still in the early stages, quantum computing promises breakthroughs in fields such as cryptography, material science, and artificial intelligence. As research continues, it could lead to solving problems that are currently beyond the reach of classical computing.";

// Initial post
Subjects.push("The Rise of Quantum Computing!");
Body.push(BlogBody);

app.set("view engine", "ejs");

// Home route
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Posts route to display the posts
app.get("/Posts", (req, res) => {
  res.render("posts.ejs", {
    subject: Subjects,
    body: Body,
  });
});

// Route to handle form submissions for new posts (POST method)
app.post("/Posts", (req, res) => {
  // Check if body and subject are present in the request
  if (req.body.Subject && req.body.Body) {
    Subjects.push(req.body.Subject);
    Body.push(req.body.Body);
  }

  // Redirect to the posts page to display the updated posts
  res.redirect("/Posts");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

