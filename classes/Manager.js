const Employee = require('./Employee');

class Manager extends Employee {
  constructor(emp_name, ID, email, office_number) {
   
    super(emp_name,ID, email);
    this.office_number = office_number;
    
  }
  getRole() {
    console.log("Manager");
    return "Manager";
  }
  printinfo(){
  console.log(`Name: ${this.emp_name} ID =${this.ID} email=${this.email} Office NUmber: ${this.office_number}`);
  }
}

module.exports = Manager;