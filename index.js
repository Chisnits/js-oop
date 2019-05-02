// Constructor Function

function Circle(radius) {
    // console.log('this', this);
    this.radius = radius,
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);

circle.location = {x : 1};
circle['location'] = {x: 1}; // the same as dot notation above.

// use case for bracket notation is when you dont yet know the property name
// ex. const propertyName = 'location';
// circle[propertyName] = {x: 1};

for (let key in circle) {
    if(typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle)
    console.log('Circle has a radius');