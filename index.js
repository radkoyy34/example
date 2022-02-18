let data = [
    10,
    3,
    17,
    28,
    10
]
console.log(data)

const filteredData = data.filter((element) => {
    if (element > 7 && element < 25) {
        return element
    }
})

//console.log(filteredData)
const ModifiedFind=data.find((element) =>  {
    if (element === 10) { return element }
})
const newResult = data.map(() )