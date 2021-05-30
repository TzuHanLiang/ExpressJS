const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.engine(
  "hbs",
  exphbs({
    layoutsDir: "views/layouts",
    defaultLayout: "main-layout",
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.router);
app.use("/", shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { layout: false, docTitle: "404" });
});

app.listen(3000);
