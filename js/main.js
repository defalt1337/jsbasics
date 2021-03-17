document.write("xd section");
console.log("message - debug");
var num1 = "";
var num2 = "";
//document.getElementById("text").innerHTML = "xd";

function idk(){
    num1 = document.getElementById("a").value;
    num2 = document.getElementById("b").value;
    var muvJel = document.getElementById("smtn").value;
    if (muvJel ==="+"){
        var eql = sum();
    }else if(muvJel==="-"){
        var eql = Number(num1) - Number(num2);
    }else if(muvJel==="*"){
        var eql = Number(num1) * Number(num2);
    }else if(muvJel==="/"){
        var eql = Number(num1) / Number(num2);
    }
    document.getElementById("text").innerHTML = eql;
}
function sum(){
    var eql = Number(num1) + Number(num2);
    return eql;
}