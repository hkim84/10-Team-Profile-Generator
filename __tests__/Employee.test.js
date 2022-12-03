const Employee = require("../lib/Employee");

test('should create a new employee', () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test('should set the name by constructor argument', () => {
    const name = "Hoon";
    const e = new Employee();
    expect(e.name).toBe(name);
});

test('should set id by constructor argument', () => {
    const testValue = "100";
    const e = new Employee("nooh", testValue);
    expect(e.id).toBe(testValue);
});

test('should set email by constructor argument', () => {
    const testValue = "test@email.com";
    const e = new Employee("Nooh", "1", testValue);
    expect(e.email).toBe(testValue);
});

test("should get name by getName()", () => {
    const testValue = "Alice";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
  
  test("should get id by getId()", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  test("should get email by getEmail()", () => {
    const testValue = "test@email.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
  test("should getRole()then return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Nooh", 1, "test@email.com");
    expect(e.getRole()).toBe(testValue);
  });