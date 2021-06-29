var first_name = "Isa";
var last_name ="Sumer";
var yearofBirth = 1990;
var message = "Hi, my name is "+ first_name + " " +last_name + " I'm " +(2021-yearofBirth) + " years old and I'm learning Javascript."
document.getElementById("student_message").innerHTML= message;

var num1 = Number(document.getElementById('num_1').textContent);
var num2= Number(document.getElementById('num_2').textContent);
var result = (num1+num2)/2;

document.getElementById("result").innerHTML = result.toFixed(2);

// # 4 

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
phone3 = phone3.toString() ;

console.log(phone1.length == 9);
console.log(phone2.length == 9);
console.log(phone3.length == 9);
// # 5

var number = Math.pow(32,6);


// # 7

var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity); //2525
console.log( (7+5) / number + 2 ); //4
console.log(pressure); //null
console.log(temperature);  //undefined
console.log(typeof pressure); //null
console.log(typeof temperature); //undefined

var x1 = (document.getElementById("url_1").textContent).replace(/\s+/g, ''); //removes extra spaces
var new1 = "https://"+x1;
document.getElementById("url_2").innerHTML=new1;

var x2 = (document.getElementById("url_3").textContent).replace(/\s+/g, ''); //elementin içindeki text i seçer.
var new2 = x2.replace("https://", "") //replace :)
document.getElementById("url_4").innerHTML=new2;  //yeni değeri atar.