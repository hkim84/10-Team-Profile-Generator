const Intern = require("../lib/Intern");

// test for instantiating an employee instance
describe("InternTest", () => {
    test('should instantiate employee instanc', () => {
        const e = new Intern();
        expect(typeof(e)).toBe("object");
    })
    });
    
    // test for setting variable for name, passing new employee name
    test('should set the name by constructor argument', () => {
        const name = "Nooh";
        const e = new Intern(name);
        expect(e.name).toBe(name);
    });
    
    // test for setting test value for number  of id value
    test('should set id by constructor argument', () => {
        const testValue = "100";
        const e = new Intern("Nooh", testValue);
        expect(e.id).toBe(testValue);
    });
    
    // test for setting email 
    test('should set email by constructor argument', () => {
        const testValue = "test@email.com";
        const e = new Intern("Nooh", "1", testValue);
        expect(e.email).toBe(testValue);
    });
    
    // test for setting School
    test('should set School by constructor argument', () => {
        const testValue = "Test School";
        const e = new Intern("Nooh", "1", "test@email.com", testValue);
        expect(e.school).toBe(testValue);
    });
    
    //test for getting variable  for name
    test("should get name by getName()", () => {
        const testValue = "Nooh";
        const e = new Intern(testValue);
        expect(e.getName()).toBe(testValue);
      });
      
    // test ror getting variable for id
      test("should get id by getId()", () => {
        const testValue = 100;
        const e = new Intern("Nooh", testValue);
        expect(e.getId()).toBe(testValue);
      });
      
    // test for getting email
      test("should get email by getEmail()", () => {
        const testValue = "test@email.com";
        const e = new Intern("Nooh", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
      });
    
    // test for getting school 
    test('should set school by constructor argument', () => {
        const testValue = "Test School";
        const e = new Intern("Nooh", "1", "test@email.com", testValue);
        expect(e.getSchool()).toBe(testValue);
    });  
     
    // test for getting roles
      test("should getRole()then return \"Intern\"", () => {
        const testValue = "Intern";
        const e = new Intern("Nooh", 1, "test@email.com");
        expect(e.getRole()).toBe(testValue);
      });