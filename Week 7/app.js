//Map, Filter, Arrow Functio


// function sum(a, b)
// {
//     return a + b
// }

// const sum = (a, b) => {
//     return a + b
// }

// console.log(sum(2, 3))

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function transform(i)
{
    return i * 2
}

// const ans = transform(2)

// console.log(ans)

arr.map(transform)
console.log(arr)