/* Promisification is the process of converting a function that uses callbacks into a function that returns a promise. 
    This allows us to use async/await syntax and makes our code cleaner and easier to read. */

function promisify(fn){
    return function(...args){
        return new Promise((resolve, reject) => {
            fn(...args, (error,result) => {
                if(error) return reject(error);
                return resolve(result);
            });
        });
    };
}

// Without promises

function loadScript(src, callback){
    let script = document.createElement('script');
    script.src=src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);
}
loadScript("test.js", (err, script) => {
    if(err) console.log(err);
    else console.log("Script loaded successfully");
});



let loadScriptPromise = function(src){
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if(err) reject (err);
            else resolve(script);
        });
    });
};


const loadScriptNew = promisify(loadScript);

// loadScriptNew("test.js")
//    .then(()=> console.log("Done"))
//  .catch((err) => console.log("error ho gya"))

(async () => {
    try{
        const result = await loadScriptNew("test.js");
        console.log("Done");
    } catch(error){
        console.log("error ho gya");
    }
})();

