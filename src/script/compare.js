export default function compare(str, correct) {
  var incorrect_array = [];
  var str_array = str.trim().toLowerCase().split(" ");
  var correct_array = correct.trim().toLowerCase().split(' ');

  for (var i = 0; i < correct_array.length; i++) {

    if ((correct_array[i] === str_array[i]) ||
        (correct_array[i - 1] === str_array[i]) ||
        (correct_array[i + 1] === str_array[i])){

    }
    else {
      incorrect_array.push(str_array[i]);
    }
  }

  return incorrect_array;
}