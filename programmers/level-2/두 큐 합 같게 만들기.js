// 그리디
class Queue {
    constructor(queue) {
        this.queue = {...queue};
        this.front = 0;
        this.rear = queue.length - 1;
        this.sum = Object.values(this.queue).reduce((acc, cur) => acc + cur, 0)
    }
    
    getSize() {
        return this.rear - this.front;
    }
    
    push(value) {
        this.rear += 1;
        this.queue[this.rear] = value;
        this.sum += value;
    }
    
    pop() {
        if (this.getSize() === 0) {
            return null;
        }
        const value = this.queue[this.front];
        delete this.queue[this.front]
        this.front += 1;
        this.sum -= value;
        
        return value;
    }
    
    getSum() {
        return this.sum;
    }
}

function solution(queue1, queue2) {
    var answer = 0;
    
    const objQueue1 = new Queue(queue1);
    const objQueue2 = new Queue(queue2);
    const maxOperations = (queue1.length + queue2.length) * 2;
    while (objQueue1.getSum() !== objQueue2.getSum()) {
        if (objQueue1.getSum() < objQueue2.getSum()) {
            const temp = objQueue2.pop();
            objQueue1.push(temp);
            answer++;
        } else {
            const temp = objQueue1.pop();
            objQueue2.push(temp);
            answer++
        }
        
        if (answer > maxOperations) {
            return -1
        }
    }
    return answer;
}

// 다른 풀이
function solution(queue1, queue2) {
    var answer = 0;
    
    let total = [...queue1, ...queue2].reduce((a, b) => a + b, 0)
    if (total % 2 !== 0) return -1; // 전체 합이 홀수라면 절대 같아질 수 없음
    
    const target = total / 2;
    
    const concatQueue = [...queue1, ...queue2, ...queue1]
    let start = 0;
    let end = queue1.length - 1;
    let sum = queue1.reduce((a, b) => a + b, 0);
    
    while(end < concatQueue.length && start <= end) {
        if (sum === target) return answer;
        
        if (sum > target) {
            sum -= concatQueue[start];
            start++;
        } else {
            end++;
            sum += concatQueue[end];
        }
         answer++;
    }
    return -1;
}