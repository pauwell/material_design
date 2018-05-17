function toggle_switch(elem){
    if(elem.classList.contains("off")){
        elem.classList.remove("off");
        elem.classList.add("on");
    }else{
        elem.classList.remove("on");
        elem.classList.add("off");
    }
}