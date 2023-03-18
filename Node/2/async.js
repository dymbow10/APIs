const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        },1500);
    });
    return promise;
};

setTimeout(() => {
    console.log("timer done");
    fetchData().then(text => {
        console.log(text);
    });
}, 1000);

console.log("wait...");