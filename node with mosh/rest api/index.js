const express = require("express");
const app = express();
const Joi = require("joi");
// for post jason data
app.use(express.json());

const courese = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
  res.end();
});

app.get("/api/courses", (req, res) => {
  res.send(courese);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courese.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(400).send("This course is not valid id");
});

app.post("/api/courses", (req, res) => {
  const course = {
    id: courese.length + 1,
    name: req.body.name,
  };

  // Joi
  const schema = Joi.object({ name: Joi.string().min(3).required() });

  const validation = schema.validate(req.body);
  res.send(validation);
  // console.log(validation.error.details[0].message);

  if (validation.error) {
    return res.status(400).send(validation.error.details[0].message);
  }

  //   if(!req.body.name || req.body.name.length < 3 ){
  //     res.status(400).send("Please Enter More Than 3 Letter");
  //     return;
  //  }

  courese.push(course);
  res.send(course);
});

// Route Parameters (16:29 t0 19:44)
// app.get("/api/courses/:year/:month", (req, res) => {
//   // res.send(req.params);
//   // ?sortBy=name
//   res.send(req.query);
// });

app.put("/api/courses/:id", (req, res) => {
  // if not exit return 404
  const course = courese.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(400).send("This course is not valid id");

  // if invalid return 404 Bad Request
  const schema = Joi.object({ name: Joi.string().min(3).required() });
  const validation = schema.validate(req.body);

  if (validation.error) {
    return res.status(400).send(validation.error.details[0].message);
  }

  // return update course
  course.name = req.body.name;
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  // if not exit return 404
  const course = courese.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(400).send("This course is not valid id");

  const index = courese.indexOf(course);
  courese.splice(index, 1);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Sever Start at ${port}`));
