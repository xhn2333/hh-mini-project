
function isPrime(n){
    var prime=[2];
    for(var i=3; i<=n; i++){
        var flag = true;
        for(var j=0; j<prime.length; j++)
            if(i % prime[j] == 0){
                flag = false;
                break;
            }
            if(i < prime[j]**2)
                break;
        if(flag == true){
            prime[prime.length++] = i;
        }
    }
    
    return prime;
}