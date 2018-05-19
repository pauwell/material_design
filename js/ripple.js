var mouse_x = 0;
var mouse_y = 0;

document.onmousemove = ((event) => {
    var dot, eventDoc, doc, body, pageX, pageY;
    event = event || window.event; // IE-ism
    mouse_x = event.pageX;
    mouse_y = event.pageY;
});

function ripple(elem){
    elem.classList.add("ripple");

    var elem_rect = elem.getBoundingClientRect();
    var local_x = mouse_x - elem_rect.left;
    var local_y = mouse_y - document.body.scrollTop - elem_rect.top; 
    var button = elem.querySelector('.background');
    button.style.left = (local_x - 34) + "px";
    button.style.top = (local_y - 34) + "px";
    setTimeout(()=>{ elem.classList.remove("ripple"); }, 200);
}