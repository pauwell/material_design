window.addEventListener("load", () => {
    var content_chunks = document.querySelectorAll(".tab-layout .tab-content");
    content_chunks.forEach(element => {
        element.style.display = "none";
    });

    var tab_list = document.querySelectorAll(".tab-bar ul li");
    tab_list.forEach((element, index, arr) => {
        if(element.classList.contains("selected")){
            select_tab(element);
        }
    });
});

function select_tab(elem){

    // UNCOMMENT PLEASE
    /*var tab_list = document.querySelectorAll(".tab-bar ul li");
    var content_list = document.querySelectorAll(".tab-layout .tab-content");
    tab_list.forEach((element, index, arr) => {
        if(element == elem){
            elem.classList.add("selected");
            if(content_list[index]){
                content_list[index].style.removeProperty("display");
            }
        }else{
            element.classList.remove("selected");
            if(content_list[index]){
                content_list[index].style.display = "none";

 
            }  
        }
    });*/


    // REMOVE PLEASE
    // Get all tab- and content-elements.
    var tab_list = document.querySelectorAll(".tab-bar ul li");
    var content_list = document.querySelectorAll(".tab-layout .tab-content");
    tab_list.forEach((element, index, arr) => {
    }
    console.log(elem);

    // @ Finish transitions.
    content_list[index].classList.add("transition_out_left");

}