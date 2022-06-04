const Employee = require('../lib/employee');
test('Create new employee', ()=>
    {
        const employee = new Employee(1,'tony bonzo','tony@demicky.com');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.name).toBe('tony bonzo');
        expect(employee.email).toEqual(expect.any(String));
    }
)
//testsmethods
test('Test universal GET methods', ()=>
    {
        const employee = new Employee(1,'tony bonzo','tony@demicky.com');
        expect(employee.getId()).toBe(employee.id);
        expect(employee.getName()).toBe(employee.name);
        expect(employee.getRole()).toBe('Employee');
        expect(employee.getEmail()).toBe(employee.email);
    }
)