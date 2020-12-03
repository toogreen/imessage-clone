function createCheckDigit(membershipId) {
  // Write the code that goes here.
        var a = membershipId;
         var sum = 0;
         while(a > 0) {
            sum += a % 10;
            a = Math.floor(a / 10);
         }
         If (sum /)
         return console.log(+sum);
}

console.log(createCheckDigit("555555"));