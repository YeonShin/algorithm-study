function solution(N, M, K, arr) {
  let result = 0;

  arr.sort((a, b) => {
    return b - a;
  });

  const maxNum = arr[0];
  const secondNum = arr[1];

  console.log (maxNum, secondNum);

  result += ((maxNum * K) * Math.floor((M / K)));
  result += M % K * secondNum;


  return result;
}

console.log(solution(5, 8, 3, [2, 4, 5, 4, 6]));