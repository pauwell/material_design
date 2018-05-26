window.addEventListener("load", () => {
    var content_chunks = document.querySelectorAll(".tab-layout .tab-content");
    content_chunks.forEach(element => {
        element.style.display = "none";
    });

    var all_tabs = document.querySelectorAll(".tab-bar ul li");
    all_tabs.forEach((element, index, arr) => {
        if(element.classList.contains("selected")){
            select_tab(element);
        }
    });
});

function select_tab(elem){
    var all_tabs = document.querySelectorAll(".tab-bar ul li");
    var content_list = document.querySelectorAll(".tab-layout .tab-content");
    all_tabs.forEach((element, index, arr) => {
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
    });
}