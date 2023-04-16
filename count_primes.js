function countPrimes(number){
  
    let prime_numbers = [2];
  
    if(number <= 1){
      let prime_number_count = 0;
    } else {
      for(let i = 2; i < number; i++ ){
        let is_prime = true;
  
        for (let prime in prime_numbers){
          if (i % prime_numbers[prime] === 0){
            is_prime = false;
            break;
          }
        }
  
        if (is_prime === true){
          prime_numbers.push(i);
        }
  
      }
    }
    let prime_number_count = prime_numbers.length;
    console.log(prime_numbers);
  
    return prime_number_count;
  }
  
console.log(countPrimes(18));