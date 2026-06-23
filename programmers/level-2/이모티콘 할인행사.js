// 완전탐색
function solution(users, emoticons) {
    var answer = [];
    let maxSubscriber = 0;
    let maxRevenue = 0;

    
    function dfs(depth, currentDiscount) {
        if (depth === emoticons.length) {
            let subscriber = 0;
            let revenue = 0;
            
            for (const user of users) {
                const [minSale, maxPrice] = user;
                let userSpent = 0;
                
                for (let i=0; i<emoticons.length; i++) {
                    const discount = currentDiscount[i];
                    const originalPrice = emoticons[i];
                    
                    if (minSale <= discount) {
                        userSpent += originalPrice * (100 - discount) / 100
                    }
                }
                
                // 만약 구매금액이 기준치 이상이라면
                if (userSpent >= maxPrice) {
                    subscriber++;
                } else {
                    revenue += userSpent
                }
            }
            
            if (subscriber > maxSubscriber) {
                maxSubscriber = subscriber;
                maxRevenue = revenue;
            } else if (subscriber === maxSubscriber && maxRevenue < revenue) {
                maxRevenue = revenue;
            }
            
            return ;
        }
        
        for (let discount of [10, 20, 30, 40]) {
            currentDiscount.push(discount);
            dfs(depth + 1, currentDiscount);
            currentDiscount.pop();
        }
        
    }
    
    dfs(0, [])
    
    
    return [maxSubscriber, maxRevenue];
}

// 다른 풀이
function solution(users, emoticons) {
    let maxSubscriber = 0;
    let maxRevenue = 0;
    
    const len = emoticons.length;
    // 매번 push/pop 하지 않고, 고정된 크기의 배열을 생성하여 덮어쓰기
    const currentDiscount = new Array(len); 
    const discountTypes = [10, 20, 30, 40];

    function dfs(depth) {
        // 하나의 할인율 조합이 완성되었을 때
        if (depth === len) {
            let subscriber = 0;
            let revenue = 0;
            
            for (let u = 0; u < users.length; u++) {
                const [minSale, maxPrice] = users[u];
                let userSpent = 0;
                
                for (let i = 0; i < len; i++) {
                    // 유저가 원하는 할인율보다 높을 때만 계산
                    if (currentDiscount[i] >= minSale) {
                        userSpent += emoticons[i] * (100 - currentDiscount[i]) / 100;
                    }
                }
                
                if (userSpent >= maxPrice) {
                    subscriber++;
                } else {
                    revenue += userSpent;
                }
            }
            
            // 우선순위 정답 갱신
            if (subscriber > maxSubscriber) {
                maxSubscriber = subscriber;
                maxRevenue = revenue;
            } else if (subscriber === maxSubscriber && revenue > maxRevenue) {
                maxRevenue = revenue;
            }
            
            return;
        }
        
        // 인덱스에 직접 값을 대입하므로 push, pop의 오버헤드가 사라짐
        for (let d = 0; d < 4; d++) {
            currentDiscount[depth] = discountTypes[d];
            dfs(depth + 1);
        }
    }
    
    dfs(0);
    
    return [maxSubscriber, maxRevenue];
}