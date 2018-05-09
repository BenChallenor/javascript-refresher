var selectElementsStartingWithA = function(element) {
  return array.filter(function(element) {
    return element[0] == "a";
  });
};

var selectElementsStartingWithA = function(array) {
  return array.filter(function(element) {
    return element[0] == "a";
  });
};

var selectElementsStartingWithVowel = function(array) {
  return array.filter(function(element) {
    return element.match(/^[aeiou]/);
  });
};

var removeNullElements = function(array) {
  return array.filter(function(element) {
    return element !== null;
  });
};

var removeNullAndFalseElements = function(array) {
  return array.filter(function(element) {
    return (element !== null && element !== false);
  });
};

var reverseWordsInArray = function(array) {
  return array.map(function(element) {
    return element.split("").reverse().join("");
  });
};

var everyPossiblePair = function(array) {
  return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
  return array.slice(3);
}

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
}

var sortByLastLetter = function(array) {
  return array.sort(function(a, b) {
    return a[a.length - 1] > b[b.length - 1];
  });
}

var getFirstHalf = function(string) {
  var stringLength = Math.ceil(string.length / 2);
  return string.split('', stringLength).join("");
}

var makeNegative = function(number) {
  return -Math.abs(number);
}

var numberOfPalindromes = function(array) {
  palindromes = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] == array[i].split('').reverse().join('')) {
      palindromes.push(array[i]);
    }
  }
  return palindromes.length;
}

var shortestWord = function(array) {
  return array.sort(function(a, b) {
    return a.length > b.length
  })[0];
};

var longestWord = function(array) {
  return array.sort(function(a, b) {
    return a.length < b.length
  })[0];
};

var sumNumbers = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  });
}

var repeatElements = function(array) {
  return (array + "," + array).split(",");
}

var stringToNumber = function(string) {
  return parseInt(string);
}

var calculateAverage = function(array) {
  var sum = array.reduce(function(a, b) {
    return a + b
  });
  return sum / array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
  var i = 0;
  var greaterThanFive = [];
  while (array[i] <= 5 ) {
    greaterThanFive.push(array[i]);
    i++
  }
  return greaterThanFive;
}

var convertArrayToObject = function(array) {
  var obj = {};
  for (var i = 0; i < array.length-1; i+=2) {
    obj[array[i]] = array[i+1];
  }
  return obj;
}


var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return string.replace(/[A-Z]+/g, '');
}

var roundUp = function(number) {
  return Math.ceil(number);
}

var formatDateNicely = function(date) {
  return date.toLocaleDateString();
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return string;
}

var checkForSpecialCharacters = function(string) {
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return format.test(string);
}

var squareRoot = function(number) {
  return Math.sqrt(number);
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
