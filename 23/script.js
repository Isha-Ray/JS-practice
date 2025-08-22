const myName = document.getElementById("my-name");
const btn =  document.getElementById("my-btn");

function makeTextSizer(size){
    function changeSize(){
        myName.style.fontSize = `${size}px`;
    }
    return changeSize;
}

const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size52 = makeTextSizer(52);
const size5  = makeTextSizer(5);
const size70  = makeTextSizer(70);

btn.addEventListener("click",size70);