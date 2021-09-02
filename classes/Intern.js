const Employee = require('./Employee');

class Intern extends Employee {
  constructor(emp_name, ID, email, school) {
   
    super(emp_name,ID, email);
    this.school = school;
    
  }

  getRole() {
    console.log("Intern");
    return "Intern";
  }

  getSchool() {
    console.log(`GitHub: ${this.school}`);
    return this.school;
  }

  
}

module.exports = Intern;