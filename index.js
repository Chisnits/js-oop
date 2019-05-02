// Constructor Function

function Circle(radius) {
    // console.log('this', this);
    this.radius = radius,
    this.draw = function() {
        console.log('draw');
    }
}

// const Circle1 = new Function( 'radius' , `
//     this.radius = radius,
//         this.draw = function() {
//             console.log('draw');
//     }
// `)

// const circle = new Circle1(1);

Circle.call({}, 1); //pass in arguments 1,2,3
Circle.apply({}, [1]); //pass in arguments in an array.


const another = new Circle(1);

Circle.location = {x : 1};