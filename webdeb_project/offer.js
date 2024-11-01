var preloader = document.getElementById("loading");
function myFunction(){
    preloader.style.display = 'none';
};
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}
let openbtn = document.getElementById('opbtn');
let modalbox = document.getElementById('modalbox');
let closebtn = document.getElementById('close-btn');

openbtn.addEventListener('click', function(){
    modalbox.style.display = 'block';
})
closebtn.addEventListener('click', function(){
    modalbox.style.display = 'none';
})
