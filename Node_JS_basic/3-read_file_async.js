const fs = require('node:fs/promises');

async function countStudents(path) {
  await fs.readFile(path, 'utf-8')
    .then((data) => {
      const dataLineByLine = data.trimEnd().split('\n');

      console.log(`Number of students: ${dataLineByLine.length - 1}`);

      const fieldList = [];
      for (let i = 1; i < dataLineByLine.length; i += 1) {
        const line = dataLineByLine[i].split(',');
        const field = line[3];
        if (!fieldList.includes(field)) {
          fieldList.push(field);
        }
      }

      for (const fld of fieldList) {
        let countStudentInField = 0;
        let studentsBelongToField = '';
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

        console.log(`Number of students in ${fld}: ${countStudentInField}. List: ${studentsBelongToField} `);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
module.exports = countStudents;
