function countPrimes(number){
    let prime_number_count = 0
    let prime_numbers = []

    for(let i = 2; i <= number; i++ ){
        is_prime = true;

        for (prime in prime_numbers){
            if (i % prime == 0){
                is_prime = false;
                break;
            }
        if (is_prime = true){
            prime_numbers.push(i);
        }

        }
    } 
    console.log(prime_numbers.toString)
    prime_number_count = prime_numbers.length;

    return prime_number_count;
}

console.log(countPrimes(18))