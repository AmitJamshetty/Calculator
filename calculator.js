function add()
{
    var x = document.getElementById("i1").value;
    var y = document.getElementById("i2").value;
    var z = parseInt(x) + parseInt(y);
    document.getElementById("ot").value=z;
}

function sub()
{
    var x = document.getElementById("i1").value;
    var y = document.getElementById("i2").value;
    var z = parseInt(x) - parseInt(y);
    document.getElementById("ot").value=z;
}

function mul()
{
    var x = document.getElementById("i1").value;
    var y = document.getElementById("i2").value;
    var z = parseInt(x) * parseInt(y);
    document.getElementById("ot").value=z;
}

function div()
{
    var x = document.getElementById("i1").value;
    var y = document.getElementById("i2").value;
    var z = parseInt(x) / parseInt(y);
    document.getElementById("ot").value=z;
}

function clr()
{
    var x = document.getElementById("i1").value=null
    var y = document.getElementById("i2").value=null
    var z = document.getElementById("ot").value=null
}