// function setTimeoutPromisified(duration)
// {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, duration);
//     });
// }

// setTimeoutPromisified(1000).then(function () {
//     console.log("Hiii !!");
//     return setTimeoutPromisified(3000);
// }).then(function () {
//     console.log("Hello !!");
//     return setTimeoutPromisified(5000);
// }).then(function () {
//     console.log("Hello There !!")
// })

// async function solve()
// {
//     await setTimeout(() => {
//         console.log("Hiii !!")
//     }, 1000);

//     await setTimeout(() => {
//         console.log("Hiii There !!")
//     }, 3000)

//     await setTimeout(() => {
//         console.log("Hello !!")
//     }, 5000);
// }

// solve()

function setTimeoutPromisified(duration)
{
    return new Promise(function(resolve) {
        setTimeout(resolve, duration);
    });
}

async function solve()
{
    await setTimeoutPromisified(1000);
    console.log("Hii !!")
    await setTimeoutPromisified(3000);
    console.log("Hello !!")
    await setTimeoutPromisified(5000);
    console.log("Hii There !!")
}

solve()