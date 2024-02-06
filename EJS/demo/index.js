import express from 'express';
const app = express();
const port = 8080;
app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Mr.S' });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});