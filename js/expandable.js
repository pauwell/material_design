var initial_content = null;
function toggle_expandable(elem){
    if(initial_content == null){
        initial_content = elem.innerHTML;
    }

    if(elem.classList.contains("show")){
        elem.classList.remove("show");
        elem.classList.add("hide");
        elem.innerHTML = "+";
    }else if(elem.classList.contains("hide")){
        elem.classList.remove("hide");
        elem.classList.add("show");
        elem.innerHTML = initial_content;
    }else{
        elem.classList.add("hide");
        elem.innerHTML = "+";
    }
}