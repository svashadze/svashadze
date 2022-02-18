let array= [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];

    array.forEach(element => {
        if (element >0 ) {
            console.log(element);
            
      }
       
   });

   function list (...number){
      let numberssum = 0;

      for(let item of number){
           console.log(list);
          numberssum = numberssum +item;
      }
    return numberssum;
   }
   let result= list(10, 50, 6, 7, 8, 11, 6, 3, 9);
   console.log(result);

   let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
    
    console.log(user.firstname +" " + user.lastname);
   