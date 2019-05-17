const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/breaking", (req, res) => {
  res.render("breaking");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/entertainment", (req, res) => {
  res.render("entertainment");
});
app.get("/events", (req, res) => {
  res.render("events");
});
app.get("/icons", (req, res) => {
  res.render("icons");
});
app.get("/short_codes", (req, res) => {
  res.render("short-codes");
});
app.get("/single", (req, res) => {
  res.render("single");
});


app.listen(process.env.PORT || '5888')
