// 스택&큐
class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }
    
    size() {
        return this.rear - this.front;
    }
    
    enqueue(value) {
        this.storage[this.rear] = value;
        this.rear += 1;
    }
    
    dequeue() {
        if (this.size() === 0) return null;
        const temp = this.storage[this.front];
        delete this.storage[this.front];
        this.front += 1;
        return temp;

    }
    
}

function solution(priorities, location) {
    var answer = 0;
    const queue = new Queue();
    priorities.forEach((priority, index) => {
        queue.enqueue({index: index, priority: priority});
    });

    while (queue.size() > 0) {
        let isPass = false;
        const item = queue.dequeue(); // {0, 2}
        for (let i = queue.front; i < queue.rear; i++) {
            if (item.priority < queue.storage[i].priority) {
                queue.enqueue(item);
                isPass = true;
                break;
            }
        }
        if (!isPass) answer++
        if (!isPass && item.index === location) break;

    }
    
    
    return answer;
}


// 최적화된 풀이
class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }
    
    size() {
        return this.rear - this.front;
    }
    
    enqueue(value) {
        this.storage[this.rear] = value;
        this.rear += 1;
    }
    
    dequeue() {
        if (this.size() === 0) return null;
        const temp = this.storage[this.front];
        delete this.storage[this.front];
        this.front += 1;
        return temp;

    }
    
}

function solution(priorities, location) {
    var answer = 0;
    const queue = new Queue();
    priorities.forEach((priority, index) => {
        queue.enqueue({index: index, priority: priority});
    });
    
    // 이 배열의 맨 앞은 항상 '현재 큐에 남아있는 최고 우선순위'를 의미
    const sortedQueue = [...priorities].sort((a, b) => b - a); 
    let maxIndex = 0; // // 현재 가장 높은 우선순위를 가리키는 포인터

    while (queue.size() > 0) {
        const item = queue.dequeue();
        // // 현재 꺼낸 아이템의 우선순위가 남아있는 최고 우선순위보다 낮다면
        if (item.priority < sortedQueue[maxIndex]) {
            queue.enqueue(item); // 맨 뒤로 보내기
        } else {
		        // 현재 꺼낸 아이템이 최고 우선순위라면 실행
            answer++;
            
            maxIndex++;
            
            // 방금 실행한 프로세스가 우리가 찾던 목표 위치라면 종료
            if (item.index === location) {
                break;
            }
        }

    }
    
    
    return answer;
}