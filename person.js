let person = { name: 'Chase'};

Object.defineProperty(person, 'name', {
    writable: false,
        enumerable: false
});

person.name = 'John';

console.log(Object.keys(person));
