//if this file is linked properly, then the console will print out "app.js ready to higgy jiggy"
console.log("app.js ready to higgy jiggy");

function colorToggle() {
    var color = document.getElementById('art').style.color;
    if (color == "red")
        document.getElementById('art').style.color="blue";
    else
        document.getElementById('art').style.color="red";
}
document.getElementById('art').onclick = function(e){
    colorToggle();// call the function
};
