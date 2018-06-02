var tab_list = null;
var content_wrapper_list = null;
var content_list = null;
var selected_tab_index = 0;
var is_switching = false;

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

window.addEventListener("resize", () => {
    select_tab(tab_list[selected_tab_index]); // XXX
});

function select_tab(elem){

    // Ignore selection if still switching.
    if(is_switching)
        return;
    is_switching = true;

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


    var previous_content = content_list[previous_tab_index]; // @ Unused
    var selected_content = content_list[selected_tab_index]; // @ Unused

    // Get view-size and positions.
    var view_width = document.documentElement.clientWidth;
    var current_x = previous_tab_index * view_width;
    var target_x = selected_tab_index * view_width;

    // Move content towards the target.
    var interval_handler = setInterval(() => {
        content_wrapper_list.forEach((element, index, arr) => {
            var offset = 10 * (Math.abs(previous_tab_index - selected_tab_index) > 1 ? 2 : 1);
            if(current_x < target_x) current_x += offset;
            else if(current_x >= target_x) current_x -= offset;
            element.style.transform = "translateX(-" + current_x + "px";
        });
        if(Math.abs(current_x - target_x) < 20){
            current_x = target_x;
            is_switching = false;
            clearInterval(interval_handler);
        }
    }, 1);
}