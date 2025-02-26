var btnAfter = document.getElementById("clearButton");
btnAfter.addEventListener("click",function(){

    var btnClear = document.createElement("button");
    btnClear.setAttribute("type","reset");
    btnClear.setAttribute("class","btn btn-lg");
    var textClear = document.createTextNode("Clear");
    btnClear.appendChild(textClear);

    var formGroup = document.getElementsById("accountFormat");
    var len = formGroup.length;
    formGroup[len -1].appendChild(clearButton);
});