export default function createReportObject(employeesList) {
  const myObject = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      const keys = Object.keys(myObject);
      return keys.length;
    },

  };

  return myObject;
}
