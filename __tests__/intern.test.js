const Intern = require('../lib/intern');

test('Create new intern', ()=>
    {
        const employee = new Intern(1,'tony bonzo','tony@demicky.com','schooooo');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.name).toBe('tony bonzo');
        expect(employee.email).toEqual(expect.any(String));
        expect(employee.school).toEqual(expect.any(String));
    }
)

test('Test Intern GET methods', ()=>
    {
        const employee = new Intern(1,'tony bonzo','tony@demicky.com','schooooo');
        expect(employee.getId()).toBe(employee.id);
        expect(employee.getName()).toBe(employee.name);
        expect(employee.getEmail()).toBe(employee.email);
        expect(employee.getSchool()).toBe(employee.school);
        expect(employee.getRole()).toBe('Intern');
    }
)