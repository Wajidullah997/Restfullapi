const express = require('express');
 require("./db/conn");
const student= require("./models/students")
const app = express();
const port = process.env.PORT|| 9098;


app.use(express.json());


app.post("/", (req, res) => {
    res.send("hello from other side by thapa")
});
app.post("/student", (req, res) => {
    console.log(req.body);
    const user = new student(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
    // res.send("hellow i am from other side.");

})  

app.listen(port, () => {

    console.log(`connection is setup at ${port}`);
});
