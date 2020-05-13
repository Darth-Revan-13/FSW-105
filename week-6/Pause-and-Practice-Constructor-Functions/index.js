function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    function printEmployeeForm() {
        console.log(Employee);
    }
    return printEmployeeForm;
}

var firstEmployee = new Employee("Phil", "Direct Tactics Engineer", "$3147/hr", status);
var secondEmployee = new Employee("Logan", "Human Factors Representative", "$1833/hr", "Part Time");
var thirdEmployee = new Employee("Phoenix", "Relational Applications Director", "$6931/hr", status);
var employees = new Array(firstEmployee, secondEmployee, thirdEmployee);
console.log(employees);