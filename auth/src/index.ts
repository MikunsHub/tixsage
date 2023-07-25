import express from 'express'
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/currentuser/',(req, res) => {
    res.send("hi there")
})

app.get('',(req, res) => {
    res.send("I am working")
})

app.listen(3000, () => {
    console.log("Listening on port 3000!!")
});