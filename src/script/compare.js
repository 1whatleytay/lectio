export function clean(text) {
  return text.trim().toLowerCase().replace(/[^A-Za-z0-9\s]/g,"").replace(/\s{2,}/g, " ");
}

export function compare(str, correct) {
  var incorrect_array = [];
  var str_array = clean(str).split(' ');
  var correct_array = clean(correct).split(' ');

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