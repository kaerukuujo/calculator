const btnContainer = document.querySelector('#btnContainer');

function createPad(){
    const numpad = document.createElement('div');
    numpad.setAttribute('id', 'numpad');
    btnContainer.appendChild(numpad);
    const actionPad = document.createElement('div');
    actionPad.setAttribute('id', 'actionPad');    
    btnContainer.appendChild(actionPad);

    for(i = 0; i < 9; i++){
        const numpadBut = document.createElement('button');
        numpadBut.setAttribute('id', 'numpadBut');
        numpadBut.textContent = i + 1;
        numpadBut.addEventListener("click", numPress);
        numpad.appendChild(numpadBut);
    };

    const numpadBut = document.createElement('button');
    numpadBut.setAttribute('id', 'zeroKey');
    numpadBut.textContent = "0";
    numpadBut.addEventListener("click", numPress);
    numpad.appendChild(numpadBut);

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

    const actionBut5 = document.createElement('button');
    actionBut5.setAttribute('id', 'actionBut5')
    actionBut5.textContent = "Enter";
    actionBut5.addEventListener("click", numPress);
    actionPad.appendChild(actionBut5);


}

createPad();

function numPress(){
    console.log(this.textContent);
}


