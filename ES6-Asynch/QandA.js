let time = 1

let x = setInterval(() => {
    console.log("GM")
    if (time > 10) {
        clearInterval(x)
    }
    time++;
}, [1000])