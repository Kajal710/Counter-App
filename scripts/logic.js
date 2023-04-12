var counter = 0;
window.addEventListener('load', bindEvents);
function bindEvents(){
document.getElementById('add').addEventListener('click', plus);
document.getElementById('sub').addEventListener('click', minus);
}
function plus(){
    counter++;
    show();
}
function minus(){
    counter--;
    show();
}

function show(){
    const span = window.document.getElementById('countvalue');
    span.innerText = counter;
}