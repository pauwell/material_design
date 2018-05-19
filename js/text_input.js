function text_input(type, elem){
    if(elem.getElementsByTagName("input")[0].value.length != 0){
        elem.classList.remove("hide");
        elem.classList.add("show");
    }else{
        elem.classList.remove("show");
        elem.classList.remove("hide");
        elem.classList.add(type);
    }
}