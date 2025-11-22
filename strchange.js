function compressString(s) {
    
    let result = "";
    let count = 1;
    let currentChar = s[0];
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === currentChar) {
            count++;
        } else {
           
            result += currentChar + (count > 1 ? count : "");
            currentChar = s[i];
            count = 1;
        }
    }
    result += currentChar + (count > 1 ? count : "");
    
    return result;
}
console.log('АААБББВВВ')

function decompressString(s) {
    
    let result = "";
    let currentChar = "";
    
    for (let i = 0; i < s.length; i++) {
       
        if (isNaN(parseInt(str[i]))) {
            currentChar = s[i];
            result += currentChar;
        } 

        else {
            let numStr = str[i];
            
            // Собираем все следующие цифры (для чисел больше 9)
            while (i + 1 < str.length && !isNaN(parseInt(str[i + 1]))) {
                numStr += s[i + 1];
                i++;
            }
            
            const count = parseInt(numStr);
            
            // Добавляем предыдущий символ (count - 1) раз, 
            // так как один символ уже был добавлен
            result += currentChar.repeat(count - 1);
        }
    }
    
    return result;
}

function fibonacci(n) {
    if (n <= 1) return n;
    
    let pprev = 0;
    let prev = 1;
    let curr = 0
    
    for (let i = 2; i <= n; i++) {
        curr = pprev + prev;
        pprev = prev;
        prev = curr;
    }
    
    return curr;
}

console.log(fibonacci(2))

function deduplicate(arr) {
    return [...new Set(arr)];
}

arr.prototype.sqrt = function(){
    let newarr = {}
    for (let i = 0; i<=arr.length; i++){
        if (isNaN(arr[i])){
            newarr.push(arr[i])
        }

    }
    return newarr
}

function findsecondabsmax(arr) {

    
    let first = -Infinity;
    let second = -Infinity;
    let minus = true;
    for (let num of arr) {
        const absValue = Math.abs(num);
        if (num<0){
            minus = true
        }
        else {
            minus = false
        }
        if (absValue > first) {
            second = first;
            first = absValue;
        } else if (absValue > second && absValue < first) {
            second = absValue;
        }
    }
    
    if (minus){
        return 0-second
    }
    else{
        return second
    }
}

