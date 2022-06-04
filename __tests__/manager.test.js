const Manager = require('../lib/manager');

test('Create new manager', ()=>
    {
        const employee = new Manager(1,'tony bonzo','tony@demicky.com',666);
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.name).toBe('tony bonzo');
        expect(employee.email).toEqual(expect.any(String));
        expect(employee.officeNumber).toEqual(expect.any(Number));
    }
)

test('Test manager GET methods', ()=>
    {
        const employee = new Manager(1,'tony bonzo','tony@demicky.com',666);
        expect(employee.getId()).toBe(employee.id);
        expect(employee.getName()).toBe(employee.name);
        expect(employee.getEmail()).toBe(employee.email);
        expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
        expect(employee.getRole()).toBe('Manager');
    }
)