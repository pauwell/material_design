var initial_content_list = new Array();

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