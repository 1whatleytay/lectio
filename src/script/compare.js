function check (str, correct){
  var incorrect_array = [];
  var str_array = str.split(" ");
  var correct_array = correct.split(' ');
  for (var i = 0; i<correct_array.length; i++){
    if((correct_array[i] === str_array[i]) || (correct_array[i - 1] === str_array[i]) || (correct_array[i +1 ] === str_array[i]) );
    else{
      incorrect_array.push(str_array[i])
    } 
  }
  return incorrect_array
  }
  console.log(check("thsi is an imperfect peice of tect","this is a perfect peice of text"));