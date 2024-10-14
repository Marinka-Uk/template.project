

setTimeout(()=>{
   try {
      console.log('Код в середині try ...  catch');
      userName;
      console.log('Код після userName');
}catch (error){
         console.log('Помилка');
         }
          console.log('Код після try ...  catch');
},500)


//  const validJSON = '{ "name": "Манго", "age": 3 }';

// const invalidJSON = '{ бекенд повернув якусь нісенітницю }';


// try {
//     const parced = JSON.parse(validJSON)
//     console.log(parced);
//     }catch (error){
//  console.log(validJSON);
//     }
    

//     try {
//       const parceInvalid = JSON.parse(invalidJSONvalidJSON)
//       console.log(parceInvalid);
//       }catch (error){
//    console.log(error);
//       }