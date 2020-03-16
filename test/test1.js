var colors = new Set()
colors.add('orange')
colors.add('red')
colors.add('yellow')
colors.add('red')
// console.log(colors)
colors.forEach(val => {
  console.log(val)
})

const values = colors.values()
let val = values.next()
while (val.done === false) {
  console.log(val.value)
  val = values.next()
}
