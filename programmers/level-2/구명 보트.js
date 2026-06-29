// 투 포인터
function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a-b); // O(N log N)
    
    let left = 0;
    let right = people.length - 1;

    while (left <= right) {
        // 가장 가벼운 사람과 무거운 사람의 무게 합
        const add = people[left] + people[right]; 
        
        // 둘 다 태울 수 있다면 가벼운 사람과 무거운 사람 둘 다 태우고 left와 right를 한 칸씩 밀고 당긴다.
        if (add <= limit) {
            left++;
        }
        
        // 둘 다 탈 수 없다면 무거운 사람 먼저 태운다.
        right--;
        answer++;
    }
    return answer;
}