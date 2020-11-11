
function insert(num){

    var textview = document.querySelector(".text-view");
    textview.value = textview.value + num;
}


function equal(){
   var exp = document.querySelector(".text-view").value;
   if(exp){
    // solve a string math expression
    document.querySelector(".text-view").value = eval(exp);
   }
}

function c(){
    document.querySelector(".text-view").value = "";
}

function del(){
    var textview = document.querySelector(".text-view");
    textview.value = textview.value.substring(0, textview.value.length - 1);
}

