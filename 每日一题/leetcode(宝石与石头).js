//NO.771
var numJewelsInStones = function(jewels, stones) {
    let ans = 0;
    const len = stones.length;
    for(let i = 0;i<len;i++){
        if(jewels.indexOf(stones[i])!==-1){
            ans++;
        }
    }
    return ans;
};