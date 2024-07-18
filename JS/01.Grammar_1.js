console.log("hello")
var ss = 123
console.log(typeof ss)
// 反斜杠表示字符串可插值
var names = `hello ${ss}`

function sayb() {
  console.log(names)
}

sayb()
// 输入框
// let userInput = prompt("Please")
// console.log(userInput)

// Object类型：对象类型其实就类似字典
var dict = {
  name: "Tony",
  age: 35
}
console.log(dict.name)

// 隐式转换
// ————>string
var num1 = 123
var num1str = 123 + ""
console.log(typeof num1str)

// 幂
var mi = 2**3
console.log(mi)

//== 会隐式转换成数字类型再比较   ===则不会
var foo1 = 0
var foo2 = ""
if (foo1 == foo2) {
  console.log("true")
}


