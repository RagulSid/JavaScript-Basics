//alert("hello, ragul")
var n1 = 10;            //variables
    var n2 = 10;
    var name = "Ragul";
    var char = 'r';
    var H1 = "CAPITAL";
    var h1 = "small";

    //alert(name);             //alerts
    //alert(n1+n2);
    //alert(h1);
    //alert(H1);
    //alert(no1);
    //alert(char);


    //styles of variables        //variables
    //partial case
    var MyName = "Ragul";
    //camel case
    var myName = "Ragul";
    //underscore
    var my_name = "Ragul";


    var names = ["ragul","elon","shiva"];       //arrays
    //alert(names);
    //alert(names[2]);
    var nums =[1,3,2,4,5,'r',"ragul",''];
    nums.push("hello"); //adding element
    //alert(nums);
    //alert(nums.length);
    //alert(nums.sort());
    //alert(nums.reverse());

    //console.log("hello");
    console.log("for loop")
    for(var i=0;i<=5;i++){                      //Loops
         console.log(i);                     
    }

    console.log("while loop");
    var i=0;
    while(i<5){
        console.log(i);
        i++;
    }

    console.log("foreach loop");
    var num = [1,3,2,4,5];
    num.forEach(function(numfun){
        console.log(numfun)
    });


    console.log("if condition");                //conditions
    if(i==5){
        console.log(i);
    }

    if(i==="hello"){
        console.log("hi");
        //data types must be similar in both sides
    }
    else{
        console.log("false");
    }


    var color;                                 //switch cases
    //color = "red";
    switch(color){
        case"red":console.log("i like red");
        break;
        case"orange":console.log("i like orange");
        break;
        default:console.log("im blind");
        //default:alert("im blind");
    }


    var person = {                            //objects literals
        fname : "Ragul",
        lname : "Sid",
        age : 19,
        friends : ["narain","vaithi"],
        address : {                          //embedded objects
            street : "south street",
            city : "Nagercoil",
            state : "TamilNadu"
        }
    }
    console.log(person.fname+" "+person.lname);
    //console.log(person.lname);
    console.log(person.address.state);
    console.log(person.friends[0]);
    console.log(person.friends[1]);

    var animal = new Object()              //objects
    animal.name1 = "tiger";                //object constructors
    animal.type1 = "Killing animal";
    animal.color1 = "orange";
    console.log(animal.type1);

    function animal1(name2,type2,color2){      //function with objects
        this.name2 = name2;
        this.type2 = type2;
        this.color2 = color2;
    }

    var tiger1 = new animal1("tiger","killing animal","orange");
    var rabbit1 = new animal1("rabbit","veg animal","white");

    console.log(rabbit1);
    console.log(rabbit1.color2);

    //functions
    function sum(a, b){
        return a+b;
    }
    //arrow functions
    //we have to create the variable here
    let sum1 = (a, b) => a+b
    let sum2 = (a, b) => {
        return a+b
    }

    //using json files
    // ` for converting json string into javascript objects
    // we can do anything with this converted js objects of json strings
    let companies =
    `[
     {
        "name":"Ragul",
        "Age ":20,
        "Degree": "BE",
        "isProgrammer": true
     },
     {
        "name":"Musk",
        "Age ":40,
        "Degree": "BE",
        "isProgrammer": true
     }
    ]`
    //console.log(JSON.parse(companies))