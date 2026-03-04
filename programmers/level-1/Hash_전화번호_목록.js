/* 내 코드 */
function solution(phone_book) {
    const newMap = new Map();
    
    for (const phone of phone_book) {
        newMap.set(phone, true);
    }
    
    for (const phone of phone_book) {
        let arr = ""
        for (const num of phone) {
            arr += num
            if (arr !== phone && newMap.has(arr)) {
                return false;
            }
        }
    }
    return true
}

/* 다른 해결 방법 */
function solution(phone_book) {
    phone_book.sort();

    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }

    return true;
}