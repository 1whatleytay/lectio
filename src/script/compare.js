export function clean(text) {
  return text.trim().toLowerCase().replace(/[^A-Za-z0-9\s]/g,"").replace(/\s{2,}/g, " ");
}

// export function compare(str, correct) {
//   var incorrect_array = [];
//   var str_array = clean(str).split(' ');
//   var correct_array = clean(correct).split(' ');

//   for (var i = 0; i < correct_array.length; i++) {

//     if ((correct_array[i] === str_array[i]) ||
//         (correct_array[i - 1] === str_array[i]) ||
//         (correct_array[i + 1] === str_array[i])){

//     }
//     else {
//       incorrect_array.push(str_array[i]);
//     }
//   }

//   return incorrect_array;
// }

export function compare(value, correct) {
  let result = [ ]
  let valueSplit = clean(value).split(' ')
  let correctSplit = clean(correct).split(' ')

  let valueIndex = 0
  let correctIndex = 0

  while (valueIndex < valueSplit.length && correctIndex < correctSplit.length) {
    const iEqual = valueSplit[valueIndex] === correctSplit[correctIndex]
    if (iEqual) {
      // console.log(valueSplit[valueIndex] + " === " + correctSplit[correctIndex])
      valueIndex++
      correctIndex++
    } else {
      // console.log(valueSplit[valueIndex] + " !== " + correctSplit[correctIndex])
      let a;
      for (a = correctIndex; a < correctSplit.length; a++) {
        if (valueSplit[valueIndex] === correctSplit[a]) {
          break;
        }
      }

      if (a < correctSplit.length) {
        for (let b = correctIndex; b < a; b++) {
          result.push(correctSplit[b])
        }
        correctIndex = a
      } else {
        result.push(valueSplit[valueIndex])
        valueIndex++
      }
    }
  }
  
  return result
}