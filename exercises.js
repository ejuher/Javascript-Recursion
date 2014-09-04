var uniq = function (arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var matchExists = false;
    for (var j = 0; j < result.length; j++){
      if (result[j] === arr[i]) {
        matchExists = true;
      }
    }
    if (!matchExists) {
      result.push(arr[i]);
    }
  }
  return result;
};

var arr = [2, 3, 2, 4, 2, 2, 99, 0, 'f'];

//console.log(uniq(arr));

var twoSum = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

var arr2 = [-1, 0, 2, -2, 1];

//console.log(twoSum(arr2));

var transpose = function(arr) {
  var result = [];
  var col_length = arr[0].length;
  for(var i = 0; i < col_length; i++) {
    // console.log("i " + i);
    var newRow = [];
    for(var j = 0; j < arr.length; j++) {
      newRow.push(arr[j].shift());
    }
    result.push(newRow);
  }
  return result;
};

var transpose2 = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result[i] = [];
    for (var j = 0; j < arr.length; j++) {
      result[i][j] = arr[j][i];
    }
  }
  return result;
};
//
// console.log(transpose2([
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8]
// ]));

var doubleArray = function(arr) {
  result = [];
  for (i = 0; i < arr.length; i++) {
    result[i] = arr[i] * 2;
  }
  return result;
};
//
// console.log(doubleArray([1,3,0,-4]));

Array.prototype.myEach = function(funk) {
  for (i = 0; i < this.length; i++) {
    funk(this[i]);
  }
};

var testFunction = function (param) {
  console.log(param);
};

["a","b"].myEach(testFunction);

Array.prototype.myMap = function(funk) {
  result = [];

  this.myEach(function (el) {
    result.push(funk(el));
  });
  return result;
};

var arr = [2,4,6];

// console.log(arr.myMap(function(a) { return 2 * a; }));

Array.prototype.myInject = function(accum, funk) {
  result = accum;
  this.myEach(function(el) {
    result = funk(result, el);
  })
  return result;
};


// console.log([1,2,3,4].myInject(3,function (a, b) {
//   return a+b;
// }));


Array.prototype.bubbleSort = function () {
  var sorted = false; 
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        var first = this[i] 
        this[i] = this[i + 1];
        this[i + 1] = first;
        sorted = false;
      }
    }
    console.log("sorted " + sorted);
  }
}

var arr = [3,2,7,0];
arr.bubbleSort();
console.log(arr);


