function makeIterator(start = 0, end = Infinity, step = 1){
    let nextStart = start;
    let iterationCount = 0;
    return{
        next(){
            let result;
            if(iterationCount < end){
                result = {value: nextStart, done : false}
                nextStart = nextStart + step;
                iterationCount++;
                return result;
            }
            return{value: iterationCount, done: true}
        },
    };
}

// constmyIterator = makeIterator(10,20);
// let result = myIterator();
// while(!result.done){
//     console.log(result.value);
//     result = myIterator();
// }

function* count(){
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
}

const even = count();
for(const v of even){
    console.log(v);
}

function* makeIterator(start, end, stepSize = 1){
for(let i=start; i<=end; i+=stepSize){
    yield i;
}
}
const two = makeIterator(1, 20, 1);
for(const val of two){
    console.log(val);
}

const btn = document.getElementById("next-btn");
let one = makeIterator(1, 20, 1);
btn.addEventListener("click", () => {
    btn.innerText = one.next().value;
});


