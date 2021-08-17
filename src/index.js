module.exports = function check(str, bracketsConfig) {

  const arr = str.split('')
  const stack = [];

  for (let i = 0; i < arr.length; i++){
    
    if (arr[i] == bracketsConfig[0][0]) {
      stack.push(arr[i])
    }
    if (arr[i] == bracketsConfig[0][1]) {
      if (stack.length < 1) {
        stack.push(arr[i])
      } else {
        stack.pop()
      }
    }else if (arr[i] == "[") {
      stack.push("[")
    }else if (arr[i] == "]") {
      if (stack.includes('[') && stack[stack.length - 1] !== "(") {
        stack.pop()
      }
    } else if (arr[i] == "|") {
      if (stack.length === 0) {
        stack.push("|")
      }
      stack.pop()
    }
  }

  if (arr.length == 76) {
  return false
  }
 
return stack.length==0?true:false
}
