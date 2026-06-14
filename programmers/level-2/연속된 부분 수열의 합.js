// 투포인터
function solution(sequence, k) {
    const prefix = new Array(sequence.length + 1).fill(0)
    for (let i = 0; i< sequence.length; i++) {
        prefix[i+1] = prefix[i] + sequence[i];
    }
    
    let start = 0;
    let end = 0;
    const subSequences = [];
    while (end < sequence.length) {
        if (prefix[end+1] - prefix[start] === k) {
            subSequences.push([start, end]);
            start++;
        } else if (prefix[end+1] - prefix[start] < k) {
            end++;
        } else {
            start++;
        }
    }
    
    subSequences.sort((a, b) => {
        const lenA = a[1] - a[0]
        const lenB = b[1] - b[0];
        if (lenA !== lenB) return lenA - lenB;
        return a[0] - b[0]
    })
    
    return subSequences[0];
}

// 다른 풀이
function solution(sequence, k) {
    let start = 0;
    let currentSum = 0;
    let minLength = Infinity;
    let answer = [-1, -1];

    for (let end = 0; end < sequence.length; end++) {
        // 우측 포인터를 이동하며 합계에 추가
        currentSum += sequence[end];

        // 합이 k보다 크면 left를 당겨서 합을 줄임
        while (currentSum > k && start <= end) {
            currentSum -= sequence[start];
            start++;
        }

        // 3. 합이 k와 일치하는 경우
        if (currentSum === k) {
            let currentLength = end - start + 1;
            // '더 짧은' 수열을 발견했을 때만 갱신 (인덱스가 자동으로 가장 앞선 것이 유지됨)
            if (currentLength < minLength) {
                minLength = currentLength;
                answer = [start, end];
            }
        }
    }

    return answer;
}