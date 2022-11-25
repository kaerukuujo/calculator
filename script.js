const container = document.querySelector('#container');

function createPad(){
    const numpad = document.createElement('div');
numpad.setAttribute('id', 'numpad');
container.appendChild(numpad);

for(i = 0; i < 9; i++){
    const numpadBut = document.createElement('div');
    numpadBut.setAttribute('id', 'numpadBut');
    numpadBut.textContent = i + 1;
    numpad.appendChild(numpadBut);
};
}

createPad();




