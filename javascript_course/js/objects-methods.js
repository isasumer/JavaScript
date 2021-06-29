var student = {
    'firstName': 'Marie',
    'lastName': 'Smith',
    'fullName': function() {
        return this.firstName + ' ' + this.lastName;
    }
}

console.log( student.fullName() ); // The console will show 'Marie Smith'



var students ={
    "fname":"isa",
    "lname":"sumer",
    "fullname":function(){
        return this.fname + " " + this.lname;
    }
}
console.log(students.fullname() );

console.log('Hello World'); // log is a method of the console object 

Math.round(2.7);  // round is a method of the Math object

var num = 3; 
var num_string = num.toString(); // toString is a method that can be applied to different data types.
console.log (num_string)
var courses = [ "HTML", "Python", "PHP" ];
courses.push("Javascript"); // push is a method of the array data type.