const Engineer = require('../lib/engineer');

test('Create new engineer', ()=>
    {
        const employee = new Engineer(1,'tony bonzo','tony@demicky.com','tonydemicky');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.name).toBe('tony bonzo');
        expect(employee.email).toEqual(expect.any(String));
        expect(employee.github).toEqual(expect.any(String));
    }
)

test('Test engineer GET methods', ()=>
    {
        const employee = new Engineer(1,'tony bonzo','tony@demicky.com','tonydemicky');
        expect(employee.getId()).toBe(employee.id);
        expect(employee.getName()).toBe(employee.name);
        expect(employee.getGithub()).toBe(employee.github);
        expect(employee.getEmail()).toBe(employee.email);
        expect(employee.getRole()).toBe('Engineer');
    }
)