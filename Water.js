//-----------------------

class S_List {
  constructor(data) {
    if (data) {
      this.data = data;
      this.next = null;
    } else {
      this.data = null;
    }
  }

  add(data) {
    if (data) {
    }
  }
}

var list = new S_List(3);

list.next = new S_List(4);

// console.log(list.data, list.next);

class WaterTrap {
  trapWater(array) {
    var left = 0,
      right = array.length - 1;
    var leftMax = array[left],
      rightMax = array[right];
    var water = 0;
    while (left < right) {
      if (leftMax < rightMax) {
        left += 1;
        leftMax = Math.max(leftMax, array[left]);
        water += leftMax - array[left];
      } else {
        right -= 1;
        rightMax = Math.max(rightMax, array[right]);
        water += rightMax - array[right];
      }
    }
    return water;
  }
  ascending(arr1) {
    for (var i = 0; i < arr1.length; i++) {
      for (var j = i + 1; j < arr1.length; j++) {
        if (arr1[i] > arr1[j]) {
          var temp = arr1[i];
          arr1[i] = arr1[j];
          arr1[j] = temp;
        }
      }
    }

    return arr1;
  }
  merchArr(arr1, arr2) {
    var arr3 = arr1.concat(arr2);
    return arr3;
  }

  merchAndSort(arr1, arr2) {
    var arr3 = this.ascending(this.merchArr(arr1, arr2));
    return arr3;
  }

  findCenterElementOfTheArray(arr1) {
    if (arr1.length % 2 == 0) {
      var md = arr1.length / 2;
      return [arr1[md - 1], arr1[md]];
    } else {
      return [arr1[Math.round(arr1.length / 2) - 1]];
    }
  }

  tototal(arr1) {
    var tot = 0;
    for (var i = 0; i < arr1.length; i++) {
      tot += arr1[i];
    }

    return tot;
  }
  tototalTimeComps(arr1) {
    var tot = 0;
    var fs = 0,
      ls = arr1.length - 1;
    while (fs <= ls) {
      if (fs == ls) tot += arr1[fs];
      else tot += arr1[fs] + arr1[ls];
      fs++;
      ls--;
    }

    return tot;
  }

  avg(arr1) {
    var tot = 0;
    for (var i = 0; i < arr1.length; i++) {
      tot += arr1[i];
    }
    return tot / 2;
  }

  medianSingle(arr1) {
    arr1 = this.ascending(arr1);
    if (arr1.length % 2 == 0) {
      var md = arr1.length / 2;
      return (arr1[md - 1] + arr1[md]) / 2;
    } else {
      return arr1[Math.round(arr1.length / 2) - 1];
    }
  }

  medianDouble(arr1, arr2) {
    var arr3 = this.merchAndSort(arr1, arr2);
    if (arr3.length % 2 == 0) {
      var md = arr3.length / 2;
      return (arr3[md - 1] + arr3[md]) / 2;
    } else {
      return arr3[Math.round(arr3.length / 2) - 1];
    }
  }

  printNumbersWith3Or4(max) {
    var j = 0;
    let numStr = "";
    for (let i = 0; ; i++) {
      numStr = i.toString();
      if (numStr.includes("3") || numStr.includes("4")) {
        j += 1;
      }
      if (j == max) {
        break;
      }
    }

    return numStr;
  }

  descending(arr1) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] < arr1[j]) {
          var temp = arr1[i];
          arr1[i] = arr1[j];
          arr1[j] = temp;
        }
      }
    }

    return arr1;
  }

  fiboSeries(n) {
    var arr = [];
    if (n < 0) {
      console.log("not yet");
      return arr;
    } else if (n == 0) {
      console.log(1);
    } else {
      var cur = 0,
        next = 1,
        tot = 0;
      for (let i = 1; i <= n; i++) {
        arr.push(cur);
        tot = cur + next;
        cur = next;
        next = tot;
      }
    }

    return arr;
  }

  factorial(n) {
    var val = 1;

    for (let i = 1; i <= n; i++) {
      val *= i;
    }
    return val;
  }

  factorialRecursive(n) {
    if (n == 1) {
      return 1;
    } else if (n <= 0) {
      return "invalid input";
    } else {
      return n * this.factorialRecursive(n - 1);
    }
  }
  fib(n) {
    if (n <= 2) {
      return 1;
    }
    return this.fib(n - 1) + this.fib(n - 2);
  }
  fibMeno(n, memo = {}) {
    if (n in memo) {
      return memo[n];
    }
    if (n <= 2) {
      return 1;
    }
    memo[n] = this.fibMeno(n - 1, memo) + this.fibMeno(n - 2, memo);

    return memo[n];
  }

  npOfWays(m, n) {
    if (m == 1 && n == 1) {
      return 1;
    }
    if (m == 1 || n == 1) {
      return 1;
    }
    if (m == 0 || n == 0) {
      return 0;
    }
    return this.npOfWays(m - 1, n) + this.npOfWays(m, n - 1);
  }
  npOfWaysMemo(m, n, memo = {}) {
    var key = m + "," + n;
    if (key in memo) {
      return memo[key];
    }
    if (m == 1 && n == 1) {
      return 1;
    }
    if (m == 1 || n == 1) {
      return 1;
    }
    if (m == 0 || n == 0) {
      return 0;
    }
    memo[key] =
      this.npOfWaysMemo(m - 1, n, memo) + this.npOfWaysMemo(m, n - 1, memo);
    return memo[key];
  }

  canSum(targetSum, numbers) {
    if (targetSum === 0) {
      return true;
    }
    if (targetSum < 0) {
      return false;
    }
    for (let num of numbers) {
      const remainder = targetSum - num;
      if (this.canSum(remainder, numbers) === true) {
        return true;
      }
    }
    return false;
  }

  canSumMemo(targetSum, numbers, memo = {}) {
    if (targetSum in memo) {
      return memo[targetSum];
    }
    if (targetSum === 0) {
      return true;
    }
    if (targetSum < 0) {
      return false;
    }
    for (let num of numbers) {
      const remainder = targetSum - num;
      if (this.canSumMemo(remainder, numbers, memo) === true) {
        memo[targetSum] = true;
        return true;
      }
    }
    memo[targetSum] = false;
    return false;
  }

  howSum(targetSum, numbers) {
    if (targetSum === 0) {
      return [];
    }
    if (targetSum < 0) {
      return null;
    }
    for (let num of numbers) {
      const remainder = targetSum - num;
      const remainderResult = this.howSum(remainder, numbers);
      if (remainderResult !== null) {
        return [...remainderResult, num];
      }
    }
    return null;
  }
  howSumMemo(targetSum, numbers, memo = {}) {
    if (targetSum in memo) {
      return memo[targetSum];
    }
    if (targetSum === 0) {
      return [];
    }
    if (targetSum < 0) {
      return null;
    }
    for (let num of numbers) {
      const remainder = targetSum - num;
      const remainderResult = this.howSumMemo(remainder, numbers, memo);
      if (remainderResult !== null) {
        memo[targetSum] = [...remainderResult, num];
        return memo[targetSum];
      }
    }
    memo[targetSum] = null;
    return null;
  }

  bestSum(target, numbers) {
    if (target == 0) return [];
    if (target < 0) return null;
    let shortComb = null;
    for (let num of numbers) {
      const remainder = target - num;
      const result = this.bestSum(remainder, numbers);
      if (result != null) {
        let combination = [...result, num];
        if (shortComb == null || combination.length < shortComb.length) {
          shortComb = combination;
        }
      }
    }
    return shortComb;
  }
  bestSumMemo(target, numbers, memo = {}) {
    if (target in memo) return memo[target];
    if (target == 0) return [];
    if (target < 0) return null;
    let shortComb = null;
    for (let num of numbers) {
      const remainder = target - num;
      const result = this.bestSumMemo(remainder, numbers, memo);
      if (result != null) {
        let combination = [...result, num];
        if (shortComb == null || combination.length < shortComb.length) {
          shortComb = combination;
        }
      }
    }
    memo[target] = shortComb;
    return shortComb;
  }

  factors(n) {
    var arr = [];
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
        arr.push(i);
      }
    }
    return arr;
  }

  primeFactors(n) {
    var arr = [];
    for (let i = 2; i <= n; ) {
      if (n % i == 0) {
        arr.push(i);
        n = n / i;
        i = 2;
      } else {
        i++;
      }
    }
    return arr;
  }

  pattern(items, columnsPerRow) {
    for (let i = 0; i < items; i++) {
      if (i % columnsPerRow === 0) {
        console.log("+++++++++++++");
      }
      console.log("------------");

      if ((i + 1) % columnsPerRow === 0 || i === items - 1) {
        console.log("+++++++++++++\n");
      }
    }
  }

  interChangeWIthout3rdVariable(a, b) {
    console.log("before a:", a, "b:", b);
    if (a >= 0 && b >= 0) {
      a = a + b;
      b = a - b;
      a = a - b;
    } else if (a < 0 && b > 0) {
      a = a * -1;
      b = b * 1;
      a = a + b;
      b = a - b;
      a = a - b;
      a = a / 1;
      b = b / -1;
    } else if (a > 0 && b < 0) {
      a = a * 1;
      b = b * -1;
      a = a + b;
      b = a - b;
      a = a - b;
      a = a / -1;
      b = b / 1;
    } else {
      a = a * -1;
      b = b * -1;
      a = a + b;
      b = a - b;
      a = a - b;
      a = a / -1;
      b = b / -1;
    }
    console.log("after a:", a, "b:", b);
  }

  Occurences(arr1, val) {
    var occ = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] == val) {
        occ++;
      }
    }
    return occ;
  }

  test(arr1) {
    arr1 = this.ascending(arr1);
    if (arr1.length % 2 == 0) {
      var md = arr1.length / 2;
      return (arr1[md - 1] + arr1[md]) / 2;
    } else {
      return arr1[Math.round(arr1.length / 2) - 1];
    }
  }

  // hard to find

  shelftBookArrange(arrInput, shelfWidth) {
    var width = shelfWidth;
    var h = 0;
    var shelf = [];
    var row = [];

    for (var i = 0; i < arrInput.length; i++) {
      if (arrInput[i][0] <= width) {
        row.push(arrInput[i][1]);
        width = width - arrInput[i][0];
      }
    }

    return 0;
  }
  minHeightShelves(books, shelfWidth) {
    var n = books.length;
    var f = new Array(n + 1).fill(0);
    f[0] = 0;
    for (var i = 1; i <= n; ++i) {
      var w = books[i - 1][0],
        h = books[i - 1][1];
      f[i] = f[i - 1] + h;
      for (var j = i - 1; j > 0; --j) {
        w += books[j - 1][0];
        if (w > shelfWidth) {
          break;
        }
        h = Math.max(h, books[j - 1][1]);
        f[i] = Math.min(f[i], f[j - 1] + h);
      }
    }
    return f[n];
  }
}

var water = new WaterTrap();
// console.log(water.trapCodium([1, 4, 3, 2]));
// console.log(water.merchAndSort([1, 4, 3, 2], [5, 8, 6]));
// console.log(water.medianDouble([1, 2, 3], [4, 6]));
// console.log(water.descending([1, 2, 7, 3, 4]));
// console.log(water.ascending([1, 2, 7, 3, 4]));
// console.log(water.printNumbersWithout3Or4(10));
// water.fiboSeries(-5);
// console.log(water.factorial(6));
// console.log(water.factorialRecursive(-3));
// console.log(water.factors(10));
// console.log(water.primeFactors(18));
// water.interChangeWIthout3rdVariable(3, -4);

// var array = [
//   5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
//   100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170,
//   175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245,
//   250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320,
//   325, 330, 335, 340, 345, 350, 355, 360, 365, 370, 375, 380, 385, 390, 395,
//   400, 405, 410, 415, 420, 425, 430, 435, 440, 445, 450, 455, 460, 465, 470,
//   475, 480, 485, 490, 495, 500,
// ];
// console.log(water.tototal(array));
// console.log(water.tototalTimeComps(array));
// console.log(water.Occurences([1, 5, 2, 4, 5, 6, 8], 45));
// console.log(water.fib(7));
// console.log(water.fibMeno(7));
// console.log(water.npOfWays(5, 3));
// console.log(water.npOfWaysMemo(1, 17));

// console.log(water.canSum(7, [5, 3, 4, 7]));
// console.log(water.canSum(7, [2, 3]));

// console.log(water.canSumMemo(7, [5, 3, 4, 7]));
// console.log(water.canSumMemo(7, [2, 3]));
// console.log(water.canSumMemo(300, [7, 14]));

console.log(water.howSumMemo(7, [5, 3, 4, 7]));
console.log(water.howSumMemo(7, [2, 3]));
console.log(water.howSumMemo(300, [7, 14]));
