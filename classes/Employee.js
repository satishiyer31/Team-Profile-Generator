class Employee {
    constructor(emp_name, ID, email) {
      this.emp_name = emp_name;
      this.ID = ID;
      this.email = email;
    }
  
    getName() {
      console.log(`Name: ${this.emp_name}`);
      return this.emp_name;
    }

    getID() {
        console.log(`ID: ${this.ID}`);
        return this.ID;
    }
      
    getEmail() {
        console.log(`Email: ${this.email}`);
        return this.email;
    }
  
    getRole() {
        console.log("Employee");
        return "Employee";
    }
  }
  
  module.exports = Employee;