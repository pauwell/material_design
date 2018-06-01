var tab_list = null;
var content_wrapper_list = null;
var content_list = null;
var selected_tab_index = 0;

window.addEventListener("load", () => {
    tab_list = document.querySelectorAll(".tab-bar ul li");
    content_wrapper_list = document.querySelectorAll(".tab-content-wrapper");
    content_list = document.querySelectorAll(".tab-layout .tab-content");
    tab_list.forEach((element, index, arr) => {
        if(element.classList.contains("selected")){
            console.log(index);
            selected_tab_index = index;
        } 
    });
});

function select_tab(elem){
    // Save current tab index.
    var previous_tab_index = selected_tab_index;

    // Get index of new selected tab.
    tab_list.forEach((element, index, arr) => {
        if(element == elem){
            selected_tab_index = index;
        } 
    });

    // Set 'selected'-class to tabs.
    tab_list.forEach((element, index, arr) => {
        if(index == selected_tab_index)
            element.classList.add("selected");
        else
            element.classList.remove("selected");
    });


    var previous_content = content_list[previous_tab_index];
    var selected_content = content_list[selected_tab_index];
    console.log(previous_tab_index + ", " + selected_tab_index);

    var view_width = document.documentElement.clientWidth;
    var current_x = previous_tab_index * view_width;
    var target_x = selected_tab_index * view_width;
    console.log(current_x + ", " + target_x);

    content_wrapper_list.forEach((element, index, arr) => {
        element.style.transform = "translateX(-" + target_x + "px";
    });

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
    /*var tab_list = document.querySelectorAll(".tab-bar ul li");
    var content_list = document.querySelectorAll(".tab-layout .tab-content");
    tab_list.forEach((element, index, arr) => {
    });
    console.log(elem);

    // @ Finish transitions.
    content_list[index].classList.add("transition_out_left");
*/
}