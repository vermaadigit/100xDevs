// function random()
// {

// }

// let p = new Promise(random);


// console.log(p);

function random(resolve)
{
    setTimeout(() => {
        resolve();
    }, 3000)
}

let p = new Promise(random);

function main()
{
    console.log("Main Function is Called !!")
}

p.then(main)