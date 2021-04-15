function myFunction(){
color_str = str.fontcolor("white");
font_str = color_str.fontsize(100);

return(font_str)
}

var str = "JS Test"
result = myFunction()
document.getElementById("JSTest").innerHTML=result
