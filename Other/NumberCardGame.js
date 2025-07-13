function solution(N, M, param) {
  let result = 0;
  let matrix = [];

  param.forEach((item, idx) => {
    const numbers = item.split(', ');    
    matrix.push(numbers)
  })

  console.log(matrix)

  matrix.forEach((item) => {
    const temp = Math.min(...item);
    if (result < temp) {
      result = temp;
    }
  })


  console.log(result)

  return result;
}

solution(2, 4, ["7, 3, 4, 8", "3, 3, 2, 4"])