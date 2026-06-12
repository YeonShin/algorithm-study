// 정렬
function solution(citations) {
    const sortedCitations = citations.sort((a, b) => a-b);
    
    for (let i = 0; i < sortedCitations.length; i++) {
        if (sortedCitations[i] >= sortedCitations.length - (i)) {
            return sortedCitations.length - i
        }
    }
    return 0;
}

// 다른 풀이
function solution(citations) {
    // 내림차순 정렬 [6, 5, 3, 1, 0]
    citations.sort((a, b) => b - a);
    
    let h = 0;
    // 인용 횟수가 현재 논문 개수(i + 1)보다 크다면 h-index 가능성을 키워감
    while (h < citations.length && citations[h] > h) {
        h++;
    }
    return h;
}