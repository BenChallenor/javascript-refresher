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
    return a.length > b.length })[0];
};

var longestWord = function(array) {
  return array.sort(function(a, b) {
    return a.length < b.length })[0];
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
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
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
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
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
