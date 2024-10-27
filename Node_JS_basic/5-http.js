const { createServer } = require('node:http');
const countStudents = require('./3-read_file_async');
const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/'){
    res.end('Hello Holberton School!');
  }
  else if (req.url === '/students'){
    
    
    countStudents(process.argv[2])
    .then((data) => {
      res.write("This is the list of our students");
    });
    
}});

app.listen(port, hostname);

module.exports = app;