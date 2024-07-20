export default function createReportObject(employeesList) {
  const myObject = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      const keys = Object.keys(employeesList);
      return keys.length;
    },

  };

  return myObject;
}
