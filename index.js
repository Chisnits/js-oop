// Constructor Function

function Circle(radius) {
    // let color = 'red'; // local variable inside of this function

    // this.radius = radius;

    let defaultLocation = { x: 0, y: 0 }; //private property

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function() {
        console.log('draw');
        //scope is temperary but the closure remains.
        // computerOptiumumLocation(0.1);
        //defaultLocation

        // this.radius
    }

        Object.defineProperty(this, 'defaultLocation', {
            get: function() {
                return defaultLocation;
            },
            set: function(value) {
                if(!value.x || !value.y)
                    throw new Error('Invalid location.')

                defaultLocation = value;
            }
        });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();

// circle.location = {x : 1};
// circle['location'] = {x: 1}; // the same as dot notation above.

// use case for bracket notation is when you dont yet know the property name
// ex. const propertyName = 'location';
// circle[propertyName] = {x: 1};

// for (let key in circle) {
//     if(typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }
// to enumerate all of the members of an object use for in loop

// const keys = Object.keys(circle);
// console.log(keys);

// to get all of the keys in an object use Object.keys

// if ('radius' in circle)
//     console.log('Circle has a radius');

// to check for the existance of a property or a method in an object use the in operator.