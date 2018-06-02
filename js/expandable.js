var initial_content_list = new Array();

/* TODO: (use a simple list and search current elem in list each time instead of id)
window.addEventListener("load", ()=>{
    var expandables = document.querySelectorAll(".expandable");
    expandables.forEach((elem, index, arr) => {
        initial_content_list = elem.innerHTML;
    });
});*/

function toggle_expandable(elem, id){
    if(initial_content_list[id] == null){
        initial_content_list[id] = elem.innerHTML;
    }

    if(elem.classList.contains("show")){
        elem.classList.remove("show");
        elem.classList.add("hide");
        elem.innerHTML = "+";
    }else if(elem.classList.contains("hide")){
        elem.classList.remove("hide");
        elem.classList.add("show");
        elem.innerHTML = initial_content_list[id];
    }else{
        elem.classList.add("hide");
        elem.innerHTML = "+";
    }
}