const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(emp_name, ID, email, github_username) {
   
    super(emp_name,ID, email);
    this.github_username = github_username;
    
  }

  getRole() {
    console.log("Engineer");
    return "Engineer";
  }

  getGithub() {
    console.log(`GitHub: ${this.github_username}`);
    return this.github_username;
  }

  
}

module.exports = Engineer;