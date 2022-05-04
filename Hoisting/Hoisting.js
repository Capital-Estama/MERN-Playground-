//1
console.log(hello);                                   
var hello = 'world'; 
var hello = 'world';
console.log(hello); 
// undefined 
// world
// Rewrite 

var hello ;
console.log(hello); // undef
hello = 'world';
console.log(hello); // has value world now 

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle  - declared
// func test() {}; declared 
// needle  = haystack - defined 
// test();  func called 

// rewrite 
var needle;
function test() { func defined...};
needle = 'haystack';
test();





//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
    
}
print();
console.log(brendan);
// var brendan = 'super cool';
// function print() { func defined }
// print called - > only ok 
// log called  => brendan -> super cool
// no rewrite needed 


//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// *Predictions*
// chicken
// half chicken
// 
// var food declared & defined
//  eat func defined 
// food is logged to console -> chicken
// eat is called 
// new var food is created with 'gone'
// food assigned  'half-chicken' and logged to console 

// //5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// no global var food 
// no func mean()
// broken snippit ^

// //6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre declared & defined  -> disco
// rewind() defined 
// rewind is called 
// in rewind scope new genre var is created 
// genre assigned -> rock
// genre is logged to console -> rock
// genre assigned - r&b
// genre logged to console -> r&b
// global genre var is logged to console -> disco 



// //7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//dojo -> san jose
// func learn defined
// global dojo logged to console -> san jose
// learn called 
// var dojo Hoisted 
// dojo assigned - > seattle 
// dojo logged to console -> seattle 
// dojo = burbank and logged to console on next line 


// //8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// function makeDojo defined 
// 2 calls from the console log 
// true & closed for now 