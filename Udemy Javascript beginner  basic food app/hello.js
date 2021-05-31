console.log("Hello, Welcome to the food app");
console.log("Let's create an account");

var username = prompt ("Please create a username");
var password = prompt ("Please create a password");

console.log ("Thank you your account have been created");

// Now we try to enter our account
console.log("Please enter your login information");
var tryuser = prompt ("Please enter your username");
var trypass = prompt ("Please enter your password:");

while ( (username!=tryuser) && (password!=trypass)){
    console.log("Wrong username and password. please try again")
    var tryuser = prompt ("Please enter your username");
    var trypass = prompt ("Please enter your password:");
}

console.log("You are connected")

var balance = 10;
console.log("Your current balance is " + balance+ " dollars");
var q1 =prompt ("Would you like to add money to your account");

if (q1=="yes"){
    var q2 = prompt ("How much would you like to add:");
    var balance= balance + Number(q2);
    console.log ("Your new balance is " + balance + " dollars");
}
else{
    console.log ("great");
}

q4 = prompt ("Would you like a burger");
 if(q4 =="yes"){
    console.log("Please choose what burger you want");
    var burgertypes=["cheese burger", "fish burger", "All dress burger"];
    var prices = [2,3,4];
    console.log("choice 1: "+ burgertypes[0] + " " + prices[0] + " $")
    console.log("choice 2: "+ burgertypes[1] + " " + prices[1] + " $")
    console.log("choice 3: "+ burgertypes[2] + " " + prices[2] + " $")

    var q5 = prompt ("What is your choice");

    if(q5 == "choice 1"){
        console.log("You have ordered a " + burgertypes[0]);
        console.log("The total of the order is "+ prices[0] + "dollars");

        var balance = balance - prices[0];
        console.log("You have "+balance+ "dollars left on your balance")
    }else if (q5=="choice 2"){
        console.log("You have ordered a "+ burgertypes[1]);
        console.log("The total of the order is "+ prices[1]+ "$") 

        var balance = balance - prices [1];
        console.log("You have "+ balance+ " $ left on your balance")
    }else if(q5=="choice 2"){
        console.log("You have ordered a "+ burgertypes[1]);
        console.log("The total of the order is "+ prices[1]+ "$") 

        var balance = balance - prices [1];
        console.log("You have "+ balance+ " $ left on your balance")
    }
}else{
        console.log("Thank you")
}























