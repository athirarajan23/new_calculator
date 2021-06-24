function displayvalue(num) {
    let inputbox = document.getElementById("reslt")
    inputbox.value += num
}



function evaluateExpression() {
    let cur_value = reslt.value
    let result = eval(cur_value)
    reslt.value = result
}


function clearBox(){
    reslt.value="";
}

function removeElement(){
    reslt.value=reslt.value.slice(0,-1)
}