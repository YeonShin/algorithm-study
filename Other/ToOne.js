function solution(N, K) {
  let result = 0;

  while (N % K > 0) {
    N--;
    result++;
    console.log(N);
  }

  while (N / K >= 1) {
    N = N / K;
    result++;
  }


  return result;
}

console.log(solution(25, 5))