
//print a message ("hello world") in web browser using html

//external javascript file
/*
document.write("hello world");
alert("this is a java script basics");  */


//variables(this names given to the memory location or data given to the js)
/*
var name = "sadha";
var age = 21;
var city = "hyderabad";

document.write(name + "</br>");
document.write(age + "</br>");
document.write(city + "</br>");  */

//data types
//(string DT)
/*
var name = "sadha";
document.write(name);
alert(name);
alert(typeof name); */

//number DT
/*
var sum = 2+5;
alert(sum);
alert(typeof sum);  */

//boolean DT
/*
var value = 5>4;
alert(value);
alert(typeof value);    */

//undefined DT
/*
var sum;
alert(sum);
alert(typeof sum);  */

//object DT
/*
var sum = null;
alert(sum);
alert(typeof sum);  */

//simple calculation programe 
/*       
            var a =parseInt(prompt("enter first number"));
            var b = parseInt(prompt("enter second number"));
            var sum = a+b;
            var sub = a-b;
            var mult = a*b;
            var div = a/b;
            var mod = a%b;
            document.write("sum is" + sum);
            document.write("<br>sub is" + sub);
            document.write("<br>mult is" + mult);
            document.write("<br>div is" + div);
            document.write("<br>mod is" + mod); */
//if-else statement(it is conditional statement in js which exicute either the condition is true or either the condition is false)
/*
//example 1
if(10==100)
{
    alert("that numbers are equal");
}
else{
    alert("numbers are not equal");
}
    
//example 2
var a = parseInt(prompt("ENTER YOUR AGE"));
if(a>18)
{
    alert("your eligible for voting");
}
else
{
    alert("your not eligible for voting");
}   */

//if-else-if-else satements(these are the statements which are used when you go to apply the multiple condition in our program )
/*
var a = parseInt(prompt("ENTER FIRST NUMBER"));
var b = parseInt(prompt("ENTER SECOND NUMBER"));
var c = parseInt(prompt("ENTER THIRD NUMBER"));
if(a>b && a>c)
{
    alert("Greater number is "+a);
}
else if(b>a && b>c)
{
    alert("Greater number is "+b);
}
else if(c>a && c>b)
{
    alert("Greater number is "+c);
}
else
{
    alert("All aye equal");
}   */
   
//operators in js
//Arithmetic operators
/*
var sum = 5+2;
var sub = 5-2;
var mult = 5*2; 
var mod = 5%2;
var div = 5/3;
alert(sum);
alert(sub);
alert(mult);
alert(mod);
alert(div); */

//increment and decrement valuese
/*
var a = 10;
a++;
a++;
a--;
alert(a);   */

//comparison operators
//==
/*
var a = 10, b = "10";
if(a==b)
{
    alert("numbers are equal");
}
else{
    alert("numbers are not equal");
}   */

//===
/*
var a = 10, b = "10";
if(a===b)
{
    alert("numbers are equal");
}
else{
    alert("numbers are not equal");
} */
// !=
/*
var a = 10, b = "10";
if(a!=b)
{
    alert("numbers are equal");
}
else{
    alert("numbers are not equal");
}   */

// > and <
/*
var a = 10, b = "15";
if(a>b)
{
    alert("Greater number is" +a);
}
else{
    alert("Greater number is" +b);
} */
// <= and >=
/*
var age = 16;

if(age>=18)
{
    alert("your eligible for voting");
}
else{
    alert("your not eligible for voting");
}   */

// logical operators
//logical AND operator(&&)
/*
var age = 40;
if(age >= 18 && age <= 30)
    {
        alert("eligible for banking exam");
    }
    else
    {
        alert("not eligible for banking exam");
    }   */
// logical OR operator(||)
/*
var color = "yellow";
if(color=="blue" || color=="red")
{
    alert("Welcome to the party");
}
else
{
    alert("please change the dresscode");
}   */

//logical not operator
/*
var a = 10,b = 5;
alert(a!=b);    */

//confirm box(is a dialogue box in js which is used to take the permission before performing the action )
/*
var a = confirm("Do you want visit google.com");
if(a==true)
{
    open("http://google.com");
}
else
{
    document.write("opps..!! you press cancle");
}   */

//Function (is a block of code designed to perform a particular task)
/*
function myMsg()
{
    alert("Welcome to my world");
}
myMsg();
myMsg(); */
/*
function addition()
{
var a = 5;
var b = 10;
document.write(a+b);
} 
addition(); */
/*
function addition1(a,b)
{
document.write(a+b);
}
addition1(10,2);    */

//function with return value(return is a key word in js)
/*
function calculation(a,b)
{
    alert("hello");
    return a+b;
}
var result = calculation(5,2);
var newVal = 12;
document.write(result + newVal);    */

// objects (A material thing that can be seen or touched)
/*
var person = 
{
    name : "sadha",
    age : 27,
    hairColor : "black"

}
document.write(person.name + "</br>" + person.age + "</br>" + person.hairColor );   */

/*
var person = 
{
    name : "sadha",
    age : 27,
    hairColor : "black",
    mydata : function()
    {
        return "person name is "+person.name + "<br>sadha age is "+person.age + "<br>sadha hairColor is "+person.hairColor
    }

}
document.write(person.mydata());    */

//length of the string
//toUpperCase and toLowerCase
/*
var name = "practice makes man perfect";
        alert(name.length);
        alert(name.toUpperCase());
        alert(name.toLowerCase());  */

//Arrays(Arrays are used to store multiple values in a single variable.) 
/*
var menu = ["sandwich","pizza",["burger","pistha"],"colddrink"]
var data = ["banana","apple","mango","grape"]
menu.push("icecream");
menu.unshift("checken");
menu.shift();
menu.pop();
menu[10] = "milkShake" 
document.write(menu + "<br>");
document.write(menu[2][1] + "<br>");
document.write(menu.concat(data));  */

// while loop(loops execute a block of code as long as a particular (specified) condition is true)
/*
var breath = 1;
while(breath<11)
{
    document.write("He is Alive breath no. is "+breath + "<br>")
    breath++;
}   */

// do while loop
/*
var breath = 1;
do
{
    document.write("He is Alive breath no. is "+breath + "<br>");
    breath++;
}
while(breath<11)    */

//for loops (for(startingpoint;condition;incr/decr))
/*
var breath;
for(breath = 1;breath<=11; breath++)
{
    document.write("He is Alive breath no. is "+breath +"<br>")
}   */

//how array working with the for loops
/*
var students = ["prince","rahul","vishal"];
for(var i = 0;i<students.length;i++ +"<br>")
{
    document.write(students[i] +"<br>")
}   */

//math functions in java script
/*
var mydata = Math.round(5.4)
var mydata = Math.sqrt(5)
var mydata = Math.max(5,2,10)
var mydata = Math.min(5,2,10)
var mydata = Math.pow(10,2)
var mydata = Math.floor(6.7)
var mydata = Math.random()
var mydata = Math.floor(Math.random()*10)
document.write(mydata); */

//switch case in js(it is a statement which is use for the decision making purpouse in the js )
/*
var c = 1;
switch(c)
{
    case 1:
        document.write("This is case 1");
        break;

    case 2:
        document.write("This is case 2");
        break;

    case 3:
        document.write("This is case 3");
        break;
    default:
        document.write("Please check your case value");
        break;  
}               */
 
//Slice method in js
/*
    var menu = ["Pizza","Buger","Ice-Cream","Samosa","Colddrink"];
    var choice = menu.slice(1,3);
    var choice = menu.slice(-2,-1);
    document.write(choice); */


//Patterns in js
/*

var i,j;
for(i=1;i<=5;i++)
{
    for(j=1;j<=i;j++)
    {
    document.write(i);
    }
     document.write("<br>");
}   */

/*
var i,j;
for(i=1;i<=5;i++)
{
    for(j=1;j<=i;j++)
    {
    document.write(j);
    }
     document.write("<br>");
}   */

/*
    var i,j;
    for(i=5;i>=1;i--)
    {
        for(j=1;j<=i;j++)
        {
        document.write(j);
        }
         document.write("<br>");
    }   */

/*
    var i,j;
    for(i=1;i<=5;i++)
    {
        for(j=1;j<=i;j++)
        {
        document.write(j);
        }
         document.write("<br>");
    }
    for(i =5-1;i>=1;i--)
    {
        for(j=1;j<=i;j++)
        {
            document.write(j);
        }
       document.write("<br>")
    }   */


//Closure is an inner function that has access to the outer functions variables.

/*
    function outer()
    {
        var a = "a is variable of uoter function";
        document.write(a + "<br>");
        function inner()
        {
            var b= "b ia variable of inner function";
            document.write(b + "<br>");
            document.write(a + "<br>");

        }
        inner();
    }
    outer();    */

//how to find day of your date of month
/*
    var a = new Date('january 6 1994');

    document.write(a.getDay());     */

//Concate function of array
/*
   
var myarr = ["prince","sadha","shiva"];
var newarr = myarr.concat("mani","shashi","laxman","sanjay");
document.write(newarr);     */

/*
    var myarr = ["prince","sadha","shiva"];
    var newarr =["mani","shashi","laxman","sanjay"];
    var finalarr = ["Akash","sindhu","priya"];
    var totalarr = myarr.concat(newarr.concat(finalarr.concat("ramu","prasad")));
    document.write(totalarr);   */

//join method in js
/*
    var arr1 = ["ramu","rahul","raju"];
    var newarr1 = arr1.join(" and ");
    var newarr1 = arr1.join(" or ");
    var newarr1 = arr1.join(" / ");
    document.write(newarr1);    */

//Reverse method in js
/*
    var arr1 = ["supriya","sujatha","susheela"];
    document.write(arr1 + "<br>");
    arr1.reverse();
    document.write(arr1);   */

  


    