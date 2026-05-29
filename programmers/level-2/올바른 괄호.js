// Stack & Queue
function solution(s) {
  var answer = true;

  // 문자열 s를 배열로 변환
  let arr = s.split("");

  // case 1. ( 가 먼저 나올 경우 무조건 올바르지 않은 경우
  // case 2. ( 로 끝나는 경우 무조건 올바르지 않은 경우
  if (arr[0] === ")" || arr[arr.length - 1] === "(") {
    return false;
  }

  // 두 괄호의 개수가 다르다면
  let leftCount = arr.filter((s) => s === "(").length;
  let rightCount = arr.filter((s) => s === ")").length;

  if (leftCount !== rightCount) {
    return false;
  }

  // O(N)
  leftCount = 0;
  rightCount = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === "(") {
      // case 3. (를 추출했을 때 )가 나온 개수 보다 작다면
      if (leftCount < rightCount) {
        return false;
      }
      leftCount++;
    } else if (arr[index] === ")") {
      rightCount++;
    }
  }

  return answer;
}

// 최적화된 코드
function solution(s) {
  var answer = true;

  // case 1. ( 가 먼저 나올 경우 무조건 올바르지 않은 경우
  // case 2. ( 로 끝나는 경우 무조건 올바르지 않은 경우
  if (s[0] === ")" || s[s.length - 1] === "(") {
    return false;
  }

  // O(N)
  let leftCount = 0;
  let rightCount = 0;

  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(") {
      leftCount++;
    } else if (s[index] === ")") {
      rightCount++;
      // case 3. (를 추출했을 때 )가 나온 개수 보다 작다면
      if (leftCount < rightCount) {
        return false;
      }
    }
  }

  return leftCount === rightCount;
}
