
function search(val) {
    var searchDiv = document.getElementById("search");
    
    if (val == 1) {
        searchDiv.style.visibility = "visible";
        searchDiv.style.opacity = "1";
    } else {
        searchDiv.style.visibility = "hidden";
        searchDiv.style.opacity = "0";
    }
}