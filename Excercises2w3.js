// //input "hello world!"
// //output
// "!dlrow olleh"

function balikString(str) {
    var temp = ''
    for(var i = str.length-1; i >= 0; i--) {
      // console.log(str[i])
       temp += str[i]
    }
    console.log(temp)
  }
  balikString('hello world!')