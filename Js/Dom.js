//Document object
console.dir(document);
console.log(document.domain);
console.log(document.title);
document.title=" JS Basics";
console.log(document.head);
//console.log(document.all);
console.log(document.all[1]);
console.log(document.links);

//Selectors
//getelement by ID
console.log(document.getElementById("header-title"));
var headertitle = document.getElementById("header-title");
var header = document.getElementById("main-header");
console.log(headertitle);
//headertitle.textContent = "hello";
//headertitle.innerText = "goodbye";
console.log(headertitle.textContent);
console.log(headertitle.innerHTML);
console.log(headertitle.innerText);
//headertitle.innerHTML = '<h3>hello</h3';
header.style.borderBottom = 'solid 5px #000'

//getelement by ClassName
var items = document.getElementsByClassName('list-group-item');
console.log(items);
// console.log(items[1]); 
// items[1].textContent = "Hello 2";  
// items[1].style.fontWeight = 'bold';   //camel naming
// items[1].style.backgroundColor = 'yellow';

//we need to iterate to apply properites for all items in the arrays
// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor = 'lightgrey';
// }

//Getelement by TAG
var li = document.getElementsByTagName('li');
console.log(li);
console.log([i]);

//QuerySelector
var header1 = document.querySelector('#main-header');
header1.style.borderBottom = 'solid 4px #000';

var input = document.querySelector('input');
//input.value = "Hello world"

var Lastitem = document.querySelector('.list-group-item:last-child');
Lastitem.style.color = 'blue';
var item = document.querySelector('.list-group-item');
item.style.color = 'red';
var secitem = document.querySelector('.list-group-item:nth-child(2)');
secitem.style.color = 'gold';


//QuerySelector All
var titles = document.querySelectorAll('.title');
console.log(titles); //nodelist - similar to collections - we can use array functions 
titles[0].textContent = 'Add items :';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'lightgrey';
//     even[i].style.backgroundColor = 'lightgreen';

// }


//Traversing DOM - Parents,sibilings,children
var itemlist = document.querySelector('#items');
console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor = 'lightgrey';
console.log(itemlist.parentNode.parentNode); // will return container where class called container
 
//Parent element
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = 'lightgrey';
// console.log(itemlist.parentElement.parentElement);

//childNodes
console.log(itemlist.childNodes);
console.log(itemlist.children);
console.log(itemlist.children[1]);

// itemlist.children[1].textContent="hello";
// console.log(itemlist.children[1]);
// console.log(itemlist.nextSibling);
// we can use first,last,previous sibling similarly 

//CreateElement
//create a div

var newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','hello div  ');
//console.log(newDiv);
var newDivtext = document.createTextNode('hello world');
newDiv.appendChild(newDivtext); //add text to div
//console.log(newDiv);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// container.insertBefore(newDiv,h1);
// newDiv.style.fontSize = '30px';


//Events
// function buttonClick(e){
//     console.log('Button clicked');
//     document.querySelector('#main').style.backgroundColor = "lightgreen";
//     console.log(e.target);
//     //console.log(e.target.id);
//     //console.log(e.target.className);
//     //console.log(e.target.classList);
     var output = document.getElementById('button');
//     //var output = document.getElementById('button').innerText = "hello";
//     //output.innerHTML = '<h3>'+e.target.id+'</h3>';
//     // console.log(e.clientX); //x axis left to right
//     // console.log(e.clientY); //Y axis top to bottom
//     // console.log(e.offsetX); //postion of actual element
//     console.log(e.altKey);
//     console.log(e.ctrlKey); //if ctrl key pressed we can add more functions...based on condition

// }
// var button = document.getElementById('button').addEventListener('click',buttonClick);

// var button = document.getElementById('button').addEventListener('click',function(){
//     console.log('function worked');
// });

var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

function runEvent(e){
    e.preventDefault();
    console.log('Event type : '+e.type);
    //output.innerHTML = "mousex : "+e.offsetX+" MouseY : "+e.offsetY;
    //console.log(e.target.value);
    //document.getElementById('output').innerHTML = e.target.value;

}

// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseover',runEvent); //for inner elements

var itemInput = document.querySelector('input[type="text"]');
//itemInput.addEventListener('keydown',runEvent);
itemInput.addEventListener('focus',runEvent);
var form = document.querySelector('form');
var select = document.querySelector('select');

//select.addEventListener('change',runEvent);

form.addEventListener('submit',runEvent);
