module.exports = function check(str, bracketsConfig) {

    if (str % 2 === 0) {
        return false
    }
    let items = str.split('')
    let len = str.length / 2

    for (let i = 0; i < len; i++) {
    let first = items[i]

    let last = items[items.length - i - 1]

      if (first == last) {
      return false
    }
  }
  return true
}
