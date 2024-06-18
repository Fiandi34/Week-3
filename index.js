const express = require("express");
const { Sequelize, QueryTypes } = require("sequelize");
const config = require("./config/config.json");
const sequelize = new Sequelize(config.development);

const path = require("path");
const app = express();
const port = 5000;
const data = [];
// template engine yang dipakai
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

app.use("/assets", express.static(path.join(__dirname, "src/assets")));
// middelware : berfungsi sebagai alat memproses inputan dari form / request
app.use(express.urlencoded({ extended: false }));

//routing
app.get("/index", home);
app.get("/blog", blog);
app.get("/addblog", viewBlog);
app.post("/addblog", addBlog);
app.get("/blog-detail/:id", blogDetail);
app.get("/update-blog/:id", editBlogView);
app.get("/product", product);
app.get("/contactme", contactme);
app.post("/update-blog", updateBlog);
app.post("/delete-blog/:id", deleteBlog);

function home(req, res) {
  res.render("index");
}
//blog
async function blog(req, res) {
  const query = `SELECT *
	FROM public.blogs;`;
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });

  res.render("blog", { data: obj });
}
function viewBlog(req, res) {
  res.render("addblog");
}
//array manipulation
function addBlog(req, res) {
  const { title, content } = req.body;
  console.log("title: ", title);
  console.log("content: ", content);
  const dataBlog = { title, content };
  const submit = data.unshift(dataBlog);
  console.log(submit);
  res.redirect("/blog");
}
function blogDetail(req, res) {
  const { id } = req.params;
  const detail = data[id];
  res.render("blog-detail", { detail });
}
function editBlogView(req, res) {
  const { id } = req.params;
  const datafilter = data[parseInt(id)];
  datafilter.id = parseInt(id);
  res.render("update-blog", { data: datafilter });
}
function updateBlog(req, res) {
  const { title, content, id } = req.body;
  data[parseInt(id)] = {
    title,
    content,
  };
  res.redirect("/blog");
}
function deleteBlog(req, res) {
  const { id } = req.params;
  data.splice(id, 1);
  res.redirect("/blog");
}
//blog
function product(req, res) {
  res.render("product");
}
function contactme(req, res) {
  res.render("contactme");
}

app.listen(port, () => {
  console.log(`server berjalan di port ${port}`);
});
