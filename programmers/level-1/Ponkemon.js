/* 내 코드 */
function solution(nums) {
    let answer = 0;
    const pickCount = nums.length / 2;
    
    let hashMap = new Set();
    
    nums.forEach((num) => {
        hashMap.add(num);
    });
    
    if (hashMap.size >= pickCount) {
        answer = pickCount
    } else {
        answer = hashMap.size
    }
    
    
    return answer;
}

/* 제출 후 최적화한 코드 */
// funcion solution(nums) {
// 	const pickCount = nums.length / 2;
	
// 	// forEach 생략
// 	const hashMap = new Set(nums);
	
// 	// 가져갈 수 있는 수와 종류의 수 중 더 작은 값이 정답
// 	return Math.min(hashMap.size, pickCount);
// }