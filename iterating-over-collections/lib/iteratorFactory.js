class iteratorFactory {
  sum(arr) {
    var total = 0;
    var str = "";

    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        total += arr[i];
      }
      else {
        str = arr.join(', ');
      }
  }
  return total;
  return str;
 }
  onlyEvens(arr) {
    var evens = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        evens.push(arr[i]);
      }
    }
  console.log(evens);
    return evens;
  }
};

module.exports = iteratorFactory;
