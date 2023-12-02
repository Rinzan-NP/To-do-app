let a = [1, 3, 5, 6]
let  sum = a.reduce((sums= 0, e) => {
    return sums + e
})
console.log(sum);