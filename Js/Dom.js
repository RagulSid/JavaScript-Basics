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
input.value = "Hello world"

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