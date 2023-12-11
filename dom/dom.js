console.log(document.domain)
console.log(document.URL)
console.log(document.title)
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
//document.all[10].textContent = "Hello";


console.log(document.forms[0])
console.log(document.links)
console.log(document.images)
console.log(document.getElementById('header-title'))
var headerTitle = document.getElementById('header-title');
console.log(headerTitle)
headerTitle.textContent = 'Hello'
headerTitle.innerText = 'Good Bye'

console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h2>Hello</h2>';
headerTitle.style.borderBottom = 'solid 3px #000';


//get elementsbyclassname
var items = document.getElementsByClassName('list-group-item');
console.log(items)
console.log(items[1])

items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = '#f4f4f4';

//Gives Error

for (var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

