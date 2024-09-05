//In-Built Class --> Date , Map

// const date = new Date();

// console.log(date.getDate());

// const map = new Map();
// map.set('Name', 'Aditya');
// map.set('Name', 'Verma');
// console.log(map.get('Name'));

// var common = 'Aditya';
// var toLow = common.toLowerCase();
// console.log(toLow);

// function setTimeoutPromisified(ms) 
// {
//     let p = new Promise(resolve => setTimeout(resolve, ms));
//     return p;   
// }

function waitfor3S(resolve)
{
    setTimeout(resolve, 3000);
}

function main()
{
    console.log("Main Function is Called !!")
}

waitfor3S(main);
