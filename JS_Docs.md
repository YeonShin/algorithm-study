# JS에서 자주 사용하는 함수/메서드 정리

## Math 클래스
### Math.max()

가장 큰수를 반환하는 메서드. 매개변수가 없다면 `Infinity` 반환함.

```js
console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// Expected output: 3
```

## Array 클래스
### Array.sort(() => {})
콜백함수의 리턴값에 따라 배열 내부 요소를 정렬합니다.<br>
- `compareFunction(a, b)`의 결과가 0보다 작은 경우 `a`를 `b`보다 낮은 인덱스로 정렬합니다.
- `compareFunction(a, b)`의 결과가 0이라면, `a`와 `b`를 변경하지 않습니다.
- `compareFunction(a, b)`의 결과가 0보다 큰 경우 `a`를 `b`보다 큰 인덱스로 정렬합니다.

```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]

```