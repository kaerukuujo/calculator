const container = document.querySelector('#container');

let answer = null;
let value = [];
let operator = [];
let eqCount = 0;
let eqString = "";




const screen = document.createElement('div');
screen.setAttribute('id', 'screen');

const fullScreen = document.createElement('div');
fullScreen.setAttribute('id', 'fullScreen')

const eqDisplay = document.createElement('div');
eqDisplay.setAttribute('id', 'eqDisplay');
fullScreen.appendChild(eqDisplay);


const numDisplay = document.createElement('div');
numDisplay.setAttribute('id', 'numDisplay');
fullScreen.appendChild(numDisplay);

screen.appendChild(fullScreen);

const clearBut = document.createElement('button');
clearBut.setAttribute('id', 'clearBut');
clearBut.textContent = 'C';
clearBut.addEventListener("click", numPress);
screen.appendChild(clearBut);


const btnContainer = document.querySelector('#btnContainer');

function createPad(){
    const numpad = document.createElement('div');
    numpad.setAttribute('id', 'numpad');
    btnContainer.appendChild(numpad);
    const actionPad = document.createElement('div');
    actionPad.setAttribute('id', 'actionPad');    
    btnContainer.appendChild(actionPad);

    for(i = 0; i < 12; i++){
        const numpadBut = document.createElement('button');
        numpadBut.setAttribute('class', 'numpadBut');
        if((i + 1) < 10){
            numpadBut.textContent = i + 1;
            numpadBut.setAttribute('id', numpadBut.textContent);
        } else if(i + 1 === 10) {
            numpadBut.textContent = '.';
            numpadBut.setAttribute('id', numpadBut.textContent);
        } else if(i + 1 === 11) {
            numpadBut.textContent = '0';
            numpadBut.setAttribute('id', numpadBut.textContent);
        } else if(i + 1 === 12){
            numpadBut.textContent = '=';
            numpadBut.setAttribute('id', numpadBut.textContent);
        }
        
        numpadBut.addEventListener("click", numPress);
        numpad.appendChild(numpadBut);
    };

    const actionBut1 = document.createElement('button');
    actionBut1.setAttribute('id', 'actionBut1')
    actionBut1.textContent = "+";
    actionBut1.addEventListener("click", numPress);
    actionPad.appendChild(actionBut1);

    const actionBut2 = document.createElement('button');
    actionBut2.setAttribute('id', 'actionBut2')
    actionBut2.textContent = "-";
    actionBut2.addEventListener("click", numPress);
    actionPad.appendChild(actionBut2);

    const actionBut3 = document.createElement('button');
    actionBut3.setAttribute('id', 'actionBut3')
    actionBut3.textContent = "*";
    actionBut3.addEventListener("click", numPress);
    actionPad.appendChild(actionBut3);

    const actionBut4 = document.createElement('button');
    actionBut4.setAttribute('id', 'actionBut4')
    actionBut4.textContent = "/";
    actionBut4.addEventListener("click", numPress);
    actionPad.appendChild(actionBut4);


}

createPad();

container.appendChild(screen);
container.appendChild(btnContainer);



function numPress() {   

    if(this.textContent === "C"){               
        answer = null; 
        eqString = "";   
        value = [];
        operator = [];
        eqCount = 0;
        eqDisplay.textContent = "";
        numDisplay.textContent = ""; 
        console.log(value);
        console.log(operator);       
    } else if (this.textContent === "+" || this.textContent === "-" ||
        this.textContent === "*" || this.textContent === "/"){
            if(numDisplay.textContent === ""){
                console.log("error");
            } else {
                operator[eqCount] = this.textContent;
                value[eqCount] = numDisplay.textContent;
                eqDisplay.textContent += `${value[eqCount]} ${operator[eqCount]} `;
                eqCount++;
                numDisplay.textContent = "";
            } 
            
            console.log(value);
            console.log(operator);            
    } else if (this.textContent === "=") {
        if (value.length === 0){
            console.log('error');
        } else if(numDisplay.textContent === ""){
            console.log('error');
        } else {
            value[eqCount] = numDisplay.textContent;
            eqDisplay.textContent += `${numDisplay.textContent} =`;
            numDisplay.textContent = "";
            for(l = 0; l < value.length; l++){
                eqString += value[l];
                if(operator[l] !== undefined){
                    eqString += operator[l];
                }                
            }
            console.log(eqString);
            answer = eval(eqString);
            numDisplay.textContent = eval(eqString);
            
        }
    } else {
        if(answer !== null){
            answer = null; 
            eqString = "";   
            value = [];
            operator = [];
            eqCount = 0;
            eqDisplay.textContent = "";
            numDisplay.textContent = ""; 
        }
        numDisplay.textContent += this.textContent;
    }

    
}

function operate(value1, value2, operator){
    if (operator === "+"){
        return value1 + value2;
    } else if (operator === "-"){
        return value1 - value2;
    } else if (operator === "*"){
        return value1 * value2;
    } else if (operator === "/"){
        return value1 / value2;
    }
}






