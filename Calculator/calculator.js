// is it possible to write to files using javascript

let mdc = document.getElementById('num-display');
var answer = '';
values = [];

function allClear() {mdc.value = "";}


function inputInt(x) { mdc.value += x; }


function deleteLast() {
    let values = JSON.stringify(mdc.value);
    vArray = values.split('');
    vArray.shift();
    vArray.pop();
    vArray.pop();
    mdc.value = vArray.join('');   
}


function compute() {
    
    let q = mdc.value;
    let qArray = q.split('');
    let qArrayLen = qArray.length;

    // checks through mdc for the indexes of the operands and pushes them to the array opPositions
    opPositions = [];
    for (var i = 0; i <= qArrayLen - 1; i++) {
            if (qArray[i] == '+' || qArray[i] == '-' || qArray[i] == '*' || qArray[i] == '/') {
                opPositions.push(i);
            }
        }  
    console.log(qArray);
    console.log(opPositions);
    
    if (opPositions.length != 0) {
        
        //if (opPositions[0] == 0) {
            
        //}
        
        /*this part gets the numbers before the operand, converts it to a number 
          and assigns it to a variable: num1
        */
        //else {
            nosBeforeOp = [];
            for (var i = 0; i < opPositions[0]; i++) {
                nosBeforeOp.push(qArray[i]);
                var num1 = parseFloat(nosBeforeOp.join(''));
            } 

            /* this part get the number after the operand, converts it to a number 
               and assigns it to a variale: num2
            */
            nosAfterOp = [];
            for (var j = opPositions[0] + 1; j <= qArrayLen-1; j++ ) {
                nosAfterOp.push(qArray[j]);
                var num2 = parseFloat(nosAfterOp.join(''));
            }

            if (qArray[opPositions[0]] == "+") {
                answer = num1 + num2;
            } else if (qArray[opPositions[0]] == "-") {
                answer = num1 - num2;
            } else if (qArray[opPositions[0]] == "*") {
                answer = num1 * num2;
            } else if (qArray[opPositions[0]] == "/") {
                answer = num1 / num2;
            }
            mdc.value = answer;    
        //} 
    }

    else if (opPositions.length == 0) {
        answer = q;
        mdc.value = answer;
    }
    
    function updateHistory() {
        var pseudoHistPrototype =   `<div id="history-prototype" onclick="histClicked()">
                                        <div id="equation">` + q + `</div>
                                        <div id="solution">` + answer + `</div>
                                    </div>`;

    var histCont = document.getElementById('history-content');

    if (q != '') {
            histCont.innerHTML += pseudoHistPrototype;
        }
    else if (q == '') {}

    }
    
    updateHistory(); 
}

function dispPrevAns() {
    mdc.value += answer;
}

function histClicked() {
    alert(answer);
}

function display(x) {
    let hTitle = document.getElementById('history-title');
    let sTitle = document.getElementById('settings-title');
    let nTitle = document.getElementById('notice-title')
    let hContent = document.getElementById('history-content'); 
    let sContent = document.getElementById('settings-content');
    

    if (x == 'history') {
        sContent.style.display = "none";
        hContent.style.display = "block";
        sTitle.style.backgroundColor = "#FFBB74";
        hTitle.style.backgroundColor = "#FF9800";
    } else if (x == 'settings') {
        sContent.style.display = "block";
        hContent.style.display = "none";
        sTitle.style.backgroundColor = "#FF9800";
        hTitle.style.backgroundColor = "#FFBB74";
    }
}

function changeDisplayDirection(x) {
    let calcDisplayCenter = document.getElementById('num-display-top');
    if (x.value == 'ltr') {
        calcDisplayCenter.style.direction = x.value;
    }  else if (x.value == 'rtl') {
        calcDisplayCenter.style.direction = x.value;
    }
}