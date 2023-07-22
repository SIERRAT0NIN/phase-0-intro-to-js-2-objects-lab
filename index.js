// Write your solution in this file!

const employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
};
console.log(employee);

const employees = { ...employee };

function updateEmployeeWithKeyAndValue(employee, object, key, value) {
  employees.name;
  employees.streetAddress;
  return employees;
}

updateEmployeeWithKeyAndValue("Antonio", "Dinuba");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.name = "Sam";
  employee.streetAddress = "12 Broadway";
  return employee;
}

const newEmployee = { ...employee };

console.log(newEmployee);

function deleteFromEmployeeByKey(employee, key) {
  delete newEmployee.name;
  return newEmployee;
}

newEmployee.name = "Alberto";
console.log(newEmployee);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee.name;
  return employee;
}
