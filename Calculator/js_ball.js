function calculator(n1,n2,sign) {
    op = ["+", "-", "*", "/"];
    
    a = Number.isInteger(n1) ;
    b = Number.isInteger(n2) ;
    
    if (a == false || b == false) {
        return ("Unknown value");
    }   else {
        if (op.includes(sign) == true) {
            if (sign == op[0]) 
                return n1 + n2;
            } else if (sign == op[1]) {
                return n1 - n2;
            }else if (sign == op[2]) {
                return n1 * n2;
            } else if (sign == op[3]) {
                return n1/n2;
            } else {
            return ("Unknown value");
            } 
        }
    }

console.log(calculator(32,4,"-"))

const createPerson = (name,age,gender) => ({name,age,gender});

//console.log(createPerson("Ife Olulesi", 17, "male"))

function grrr() {
    // fix this very annoying array something
    const LOCAL_FORECAST = {
        today: { min: 25, max: 35.5 },
        tommorrow: { min: 21, max: 30}  
    };

    function getMaxOfTmrw(forecast) {
        "use strict";

        const { tomorrow : { max : maxOfTomorrow } } = forecast;

        return maxOfTomorrow;
    }

    console.log(getMaxOfTmrw(LOCAL_FORECAST));
}


function update() {

    var name = document.getElementById('name');
    var type = document.getElementById('type');
    var color = document.getElementById('color');
    var size = document.getElementById('size');
    var board = document.getElementById('infoDisplay');
    var showGlass = document.getElementById('sampleColor');
    var realObject = document.getElementById('realObject');
    var radius = size.value / 2;

    board.innerHTML =` Name: `  + name.value + `<br> Type: ` +
     type.value + `<br> Color: ` + color.value + `<br> Size: ` + size.value + 
     `<br> Border Radius: ` + radius + "px";
    
    realObject.style.backgroundColor = color.value;

    if (type.value == "circle") {

        realObject.style.width = size.value + "px";
        realObject.style.height = size.value + "px";
        realObject.style.borderRadius = radius + "px";
        //console.log("the size of the object = " + size.value);
        //console.log("the radius of the circle = " + radius);
    }  else if (type.value == "square") {
        realObject.style.width = size.value + "px";
        realObject.style.height = size.value + "px";
        realObject.style.borderRadius = 0;
    }
    
    showGlass.style.backgroundColor = color.value;
    
  
}


function level(x) {
    let b = x.value;
    var a = document.getElementById('fresh');
    const GOLD = "GOLD!!";
    const SILVER = "SILVER!";
    const BRONZE = "Bronze";
    const def = "Welcome member!!";
    
    b == "A" ? a.innerHTML = GOLD : b == "B" ? a.innerHTML = SILVER : b == "C" ? a.innerHTML = BRONZE : a.innerHTML = def;

    console.log(b);
    console.log("The value of a = {GOLD}") ;
}

function checkNo() {
    f = document.getElementById('no');
    g = document.getElementById('howNo');
    const pve = f.value + " is a positive integer";
    const nve = f.value + " is a negative integer";
    const neu = f.value + " is a neutral integer";

            
    f.value < 0 ? g.innerHTML = nve : f.value == 0 ? g.innerHTML = neu : g.innerHTML = pve; 

}

const magic = () => "The supposed date is " + Date();
//console.log(magic);