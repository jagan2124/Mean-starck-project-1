// JavaScript code
function Zip_code() {
let input=document.getElementById('searchbar').value
input=input.toLowerCase();
let x= document.getElementsByClassName('Zip code');
for (i=0;i<x.length; i++){
if (!x[i].innerHTML.toLowerCases().includes(input)){
x[i].style.display="none";
}
else{
x[i].style.display="list-item";
}
}
}