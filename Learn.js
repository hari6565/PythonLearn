function fib(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n == 0) {
    return 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

function noWays(m, n, memo = {}) {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m == 1 && n == 1) return 1;
  if (m == 0 || n == 0) return 0;
  memo[key] = noWays(m - 1, n, memo) + noWays(m, n - 1, memo);
  return memo[key];
}

function canSum(target, numbers, memo = {}) {
  if (target in memo) {
    return memo[target];
  }
  if (target == 0) return true;
  if (target < 0) return false;
  for (let num of numbers) {
    let remainder = target - num;
    if (canSum(remainder, numbers, memo) == true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
}

function howSum(target, numbers) {
  if (target == 0) return [];
  if (target < 0) return null;
  for (let num of numbers) {
    const remainder = target - num;
    const result = howSum(remainder, numbers);
    if (result != null) {
      return [...result, num];
    }
  }
  return null;
}
function howSumMemo(target, numbers, memo = {}) {
  if (target in memo) return memo[target];
  if (target == 0) return [];
  if (target < 0) return null;
  for (let num of numbers) {
    const remainder = target - num;
    const result = howSumMemo(remainder, numbers, memo);
    if (result != null) {
      memo[target] = [...result, num];
      return [...result, num];
    }
  }
  memo[target] = null;
  return null;
}

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
function howMWayConstruct(target, words) {
  if (target == "") return 1;
  var total = 0;
  for (let word of words) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      const ways = howMWayConstruct(suffix, words);
      total += ways;
    }
  }
  return total;
}

function howMWayConstructMemo(target, words, memo = {}) {
  if (target in memo) {
    return memo[target];
  }
  if (target == "") return 1;
  var total = 0;
  for (let word of words) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      const ways = howMWayConstructMemo(suffix, words, memo);
      total += ways;
    }
  }
  memo[target] = total;
  return total;
}

console.log(howMWayConstructMemo("ade", ["ab", "a", "c", "de", "b"]));
