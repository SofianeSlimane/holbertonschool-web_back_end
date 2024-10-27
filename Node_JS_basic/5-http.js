const { createServer } = require('node:http');
const fs = require('node:fs/promises');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.statusCode = 200;
    res.end();
  } else if (req.url === '/students') {
    async function countStudents(path) {
      await fs.readFile(path, 'utf-8')
        .then((data) => {
          const dataLineByLine = data.trimEnd().split('\n');
          res.write('This is the list of our students\n');
          res.write(`Number of students: ${dataLineByLine.length - 1}\n`);
          res.statusCode = 200;
          
          const fieldList = [];
          for (let i = 1; i < dataLineByLine.length; i += 1) {
            const line = dataLineByLine[i].split(',');
            const field = line[3];
            if (!fieldList.includes(field)) {
              fieldList.push(field);
            }
          }
          let fieldLiestLength = fieldList.length;
          for (const fld of fieldList) {
            let countStudentInField = 0;
            let studentsBelongToField = '';
            fieldLiestLength -= 1;
            for (let i = 1; i < dataLineByLine.length; i += 1) {
              if (dataLineByLine[i].split(',').includes(fld)) {
                const studentsInField = dataLineByLine[i].split(',')[0];

                studentsBelongToField += `${studentsInField}`;
                if (i < dataLineByLine.length - 2) {
                  studentsBelongToField += ', ';
                }
                countStudentInField += 1;
              }
            }

            res.write(`Number of students in ${fld}: ${countStudentInField}. List: ${studentsBelongToField}`);
             fieldLiestLength !== 0 ? res.write('\n') : res.end()
            
            
          }
          
          
      
        })
        .catch(() => {
          res.write('This is the list of our students\nCannot load the database');
          res.end()
        });
    }
    countStudents(process.argv[2]);
  }

}

);

app.listen(port, hostname);

module.exports = app;
