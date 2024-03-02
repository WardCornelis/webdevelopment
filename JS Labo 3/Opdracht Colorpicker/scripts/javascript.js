let r = document.querySelector('#r');
let g = document.querySelector('#g');
let b = document.querySelector('#b');
let r_out = document.querySelector('#r_out');
let g_out = document.querySelector('#g_out');
let b_out = document.querySelector('#b_out');
let hex_out = document.querySelector('#hex');

function setColor(){
    let r_hex = parseInt(r.value, 10).toString(16);
    let g_hex = parseInt(g.value, 10).toString(16);
    let b_hex = parseInt(b.value, 10).toString(16);
    let hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
    hex_out.style.backgroundColor = hex;
}

function pad(n){
    return (n.length<2) ? "0"+n : n;
}

r.addEventListener('change', function() {
    setColor();
    r_out.value = r.value;
}, false);

r.addEventListener('input', function() {
    setColor();
    r_out.value = r.value;
}, false);

g.addEventListener('change', function() {
    setColor();
    g_out.value = g.value;
}, false);

g.addEventListener('input', function() {
    setColor();
    g_out.value = g.value;
}, false);

b.addEventListener('change', function() {
    setColor();
    b_out.value = b.value;
}, false);

b.addEventListener('input', function() {
    setColor();
    b_out.value = b.value;
}, false);

window.addEventListener("load", setup);