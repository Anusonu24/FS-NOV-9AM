let marks = [35, 36, 37, 38, 39, 40]
//create new array
let a = []

let i = 0;
while (i <= marks.length - 1) {
    a.push(marks[i])
    i++
}
console.log(a)
marks[marks.length - 1] = 45
console.log(marks)