export default function createReportObject(employeesList) {
  const myObject = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      const keys = Object.keys(this);
      return keys.length;
    },

  };

  return myObject;
}
