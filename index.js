let totalString = "";

document.getElementById("1").onclick = function () {
    document.getElementById("display").innerHTML +=
        "1"
    totalString += "1"
}

document.getElementById("2").onclick = function () {
    document.getElementById("display").innerHTML +=
        "2"
    totalString += "2"
}
document.getElementById("3").onclick = function () {
    document.getElementById("display").innerHTML +=
        "3"
    totalString += "3"
}
document.getElementById("4").onclick = function () {
    document.getElementById("display").innerHTML +=
        "4"
    totalString += "4"
}

document.getElementById("5").onclick = function () {
    document.getElementById("display").innerHTML +=
        "5"
    totalString += "5"

}

document.getElementById("6").onclick = function () {
    document.getElementById("display").innerHTML +=
        "6"
    totalString += "6"
}

document.getElementById("7").onclick = function () {
    document.getElementById("display").innerHTML +=
        "7"
    totalString += "7"
}
document.getElementById("8").onclick = function () {
    document.getElementById("display").innerHTML +=
        "8"
    totalString += "8"
}

document.getElementById("9").onclick = function () {
    document.getElementById("display").innerHTML +=
        "9"
    totalString += "9"
}

document.getElementById("zero").onclick = function () {
    document.getElementById("display").innerHTML +=
        "0"
    totalString += "0"
}

document.getElementById("point").onclick = function () {
    document.getElementById("display").innerHTML +=
        "."
    totalString += "."
}

document.getElementById("add").onclick = function () {
    if (totalString.includes("+")||totalString.includes("-")||totalString.includes("x")||totalString.includes("÷")){
        document.getElementById("display").innerHTML = ""
        totalString = calculator()
        totalString = totalString.toString().concat("+")
        document.getElementById("display").innerHTML +=
        "+"
    }

    else {
    document.getElementById("display").innerHTML +=
        "+"
    totalString += "+"
    }
}
document.getElementById("sub").onclick = function () {
    if (totalString.includes("+")||totalString.includes("-")||totalString.includes("x")||totalString.includes("÷")) {
        document.getElementById("display").innerHTML = ""
        totalString = calculator()
        totalString = totalString.toString().concat("-")
        document.getElementById("display").innerHTML +=
        "-"
    }

    else {
    document.getElementById("display").innerHTML +=
        "-"
    totalString += "-"
    }
}
document.getElementById("multiply").onclick = function () {
    if (totalString.includes("+")||totalString.includes("-")||totalString.includes("x")||totalString.includes("÷")) {
        document.getElementById("display").innerHTML = ""
        totalString = calculator()
        totalString = totalString.toString().concat("x")
        document.getElementById("display").innerHTML +=
        "x"
    }
    else {
    document.getElementById("display").innerHTML +=
        "x"
    totalString += "x"
    }
}
document.getElementById("divide").onclick = function () {
    if (totalString.includes("+")||totalString.includes("-")||totalString.includes("x")||totalString.includes("÷")) {
        document.getElementById("display").innerHTML = ""
        totalString = calculator()
        totalString = totalString.toString().concat("÷")
        document.getElementById("display").innerHTML +=
        "÷"
    }
    else {
    document.getElementById("display").innerHTML +=
        "÷"
    totalString += "÷"
    }
}

document.getElementById("equal").onclick = function () {
    document.getElementById("display").innerHTML = ""
    totalString = calculator()
    totalString = totalString.toString()
}

document.getElementById("C").onclick = function () {
    window.location.reload();
}



function calculator() {
    let finalTotal = 0;     
    if (totalString.includes("+")) {
        let splitString = totalString.split("+")
        finalTotal += parseInt(splitString[0]) + parseInt(splitString[1])
    }
    else if (totalString.includes("-")) {
        let splitString = totalString.split("-")
        finalTotal += parseInt(splitString[0]) - parseInt(splitString[1])

    }
    else if (totalString.includes("x")) {
        let splitString = totalString.split("x")
        finalTotal += parseInt(splitString[0]) * parseInt(splitString[1])

    }
    else if (totalString.includes("÷")) {
        let splitString = totalString.split("÷")
        if (parseInt(splitString[1])==0) {
            alert("Nice try Einstein");
            window.location.reload();
        }
        else  {
        finalTotal += parseInt(splitString[0]) / parseInt(splitString[1])
        }
    }
    if (finalTotal%1 !=0) {
        finalTotal=finalTotal.toFixed(2)
        }
   
    document.getElementById("display").innerHTML += finalTotal
    return finalTotal
}