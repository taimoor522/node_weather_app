const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();

// port number
const port = process.env.PORT || 3000;

const publicDirPath = path.join(__dirname, "../public");
const viewsDirPath = path.join(__dirname, "../templetes/views");
const partialsDirPath = path.join(__dirname, "../templetes/partials");

app.use(express.static(publicDirPath));
app.set("view engine", "hbs");
app.set("views", viewsDirPath);

hbs.registerPartials(partialsDirPath);

app.get("", (req, res) => {
  return res.render("index", {
    title: "Home",
    creator: "Taimoor Ghafar",
  });
});

app.get("/help", (req, res) => {
  return res.render("help", {
    title: "Need Help?",
    creator: "Taimoor Ghafar",
  });
});

app.get("/about", (req, res) => {
  return res.render("about", {
    title: "About",
    creator: "Taimoor Ghafar",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.location) return res.send("Location Not Provide.");
  res.send({
    forcast: "",
    location: req.query.location,
  });
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
