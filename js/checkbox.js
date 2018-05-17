function check_box(elem){
    if(elem.classList.contains("checked")){
        elem.classList.remove("checked");
        elem.classList.add("unchecked");
    }else{
        elem.classList.remove("unchecked");
        elem.classList.add("checked");
    }
}