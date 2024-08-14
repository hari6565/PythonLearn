// water trap
function waterTrap(arr) {
  var l = 0,
    r = arr.length - 1;
  var L = arr[0],
    R = arr[r];
  var total = 0;
  while (l < r) {
    if (L < R) {
      l++;
      L = Math.max(L, arr[l]);
      total += L - arr[l];
    } else {
      r--;
      R = Math.max(R, arr[r]);
      total += R - arr[r];
    }
  }
  return total;
}

// fibonaccie series
function fib(n) {
  var cur = 1,
    pre = 0,
    arr = [pre, cur];
  for (let i = 1; i < n - 1; i++) {
    var temp = cur + pre;
    pre = cur;
    cur = temp;
    arr.push(cur);
  }
  console.log(arr);
}

//  nth fibonaccie
function fib(n) {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

function fibMemo(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);

  return memo[n];
}

// row and colum bottom reach
function npOfWays(m, n) {
  if (m == 1 && n == 1) {
    return 1;
  }
  if (m == 1 || n == 1) {
    return 1;
  }
  if (m == 0 || n == 0) {
    return 0;
  }
  return npOfWays(m - 1, n) + npOfWays(m, n - 1);
}

function npOfWaysMemo(m, n, memo = {}) {
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
  memo[key] = npOfWaysMemo(m - 1, n, memo) + npOfWaysMemo(m, n - 1, memo);
  return memo[key];
}

// array can sum targetValue
function canSum(targetSum, numbers) {
  if (targetSum === 0) {
    return true;
  }
  if (targetSum < 0) {
    return false;
  }
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }
  return false;
}

function canSumMemo(targetSum, numbers, memo = {}) {
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
    if (canSumMemo(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}
// how many ways can array sum targetValue
function howSum(targetSum, numbers) {
  if (targetSum === 0) {
    return [];
  }
  if (targetSum < 0) {
    return null;
  }
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }
  return null;
}
function howSumMemo(targetSum, numbers, memo = {}) {
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
    const remainderResult = howSumMemo(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

// best way array can sum targetValue
function bestSum(target, numbers) {
  if (target == 0) return [];
  if (target < 0) return null;
  let shortComb = null;
  for (let num of numbers) {
    const remainder = target - num;
    const result = bestSum(remainder, numbers);
    if (result != null) {
      let combination = [...result, num];
      if (shortComb == null || combination.length < shortComb.length) {
        shortComb = combination;
      }
    }
  }
  return shortComb;
}
function bestSumMemo(target, numbers, memo = {}) {
  if (target in memo) return memo[target];
  if (target == 0) return [];
  if (target < 0) return null;
  let shortComb = null;
  for (let num of numbers) {
    const remainder = target - num;
    const result = bestSumMemo(remainder, numbers, memo);
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
// can Construct target string from array
function canConstruct(target, words) {
  if (target == "") return true;
  for (let word of words) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, words) == true) {
        return true;
      }
    }
  }
  return false;
}
function canConstructMemo(target, words, memo = {}) {
  if (target in memo) {
    return memo[target];
  }
  if (target == "") return true;
  for (let word of words) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      if (canConstructMemo(suffix, words, memo) == true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}

//how many ways can Construct target string from array
function howManyWayConstruct(target, words) {
  if (target == "") return 1;
  var total = 0;
  for (let word of words) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      total += howManyWayConstruct(suffix, words);
    }
  }
  return total;
}

function howManyWayConstructMemo(target, words, memo = {}) {
  if (target in memo) {
    return memo[target];
  }
  if (target == "") return 1;
  var total = 0;
  for (let word of words) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      total += howManyWayConstructMemo(suffix, words, memo);
    }
  }
  memo[target] = total;
  return total;
}
//all ways can Construct target string from array
function allWays(target, words) {
  if (target == "") return [[]];
  var result = [];
  for (let word of words) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allWays(suffix, words);
      const targetWays = suffixWays.map((keys) => [word, ...keys]);
      console.log(targetWays);
      result.push(...targetWays);
    }
  }
  return result;
}

function allWaysMemo(target, words, memo = {}) {
  if (target in memo) return memo[target];
  if (target == "") return [[]];
  var result = [];
  for (let word of words) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allWaysMemo(suffix, words, memo);
      const targetWays = suffixWays.map((keys) => [word, ...keys]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
}

// Tablation

// fib tablation
function fibTablation(n) {
  var table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  console.log(table);
  return table[n];
}

function gridTravlerTablation(m, n) {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const temp = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += temp;
      if (i + 1 <= m) table[i + 1][j] += temp;
    }
  }
  return table;
}

function canSumTabulation(target, numbers) {
  const table = Array(target + 1).fill(false);
  table[0] = true;
  for (let i = 0; i < target; i++) {
    if (table[i] == true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }
  return table[target];
}

function howTabulation(target, numbers) {
  const table = Array(target + 1).fill(null);
  table[0] = [];
  for (let i = 0; i < target; i++) {
    if (table[i] != null) {
      for (let num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }
  return table[target];
}

function bestTablation(targetSum, numbers) {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i < targetSum; i++) {
    if (table[i] != null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        if (!table[i + num] || table[i + num].length > combination.length)
          table[i + num] = [...table[i], num];
      }
    }
  }
  return table[targetSum];
}
