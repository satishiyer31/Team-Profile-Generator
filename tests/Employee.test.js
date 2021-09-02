
const Employee = require('../classes/Employee');

describe("Employee", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name, email, ID  if provided valid arguments", () => {
        const employee = new Employee("Sarah", 3, "sarah@getMaxListeners.com") ;
  
        // Verify that the new object has the correct properties
        expect(employee.emp_name).toEqual("Sarah");
        expect(employee.ID).toEqual(3);
        expect(employee.email).toEqual("sarah@getMaxListeners.com");
      });
  
      // it("should throw an error if provided no arguments", () => {
      //   // Wrap the object initialization in a callback function that Jest will run
      //   const employee = () => new Employee();
  
      //   // Verify that an error was thrown in the callback function
      //   expect(employee).toThrow();
      // });
  
      
    });
  });