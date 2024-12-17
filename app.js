function checkIfString(result){
    return new Promise ((resolve, reject) =>{
        if (typeof result === "string"){
            resolve ('this is a string')
        }
        else {
            reject ('not a string')
        }
    })
}

checkIfString()
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

const positiveNumber= (number) =>{
    return new Promise((resolve, reject)=>{
      if (number > 0){
        resolve('the number is positive')
      }
      else{
            reject('the number is not positive')
        }
})

}
  positiveNumber(10)
  .then((answer)=>{
      console.log(answer)
  })
  .catch((noAnswer) =>{
    console.log(noAnswer)
  })

function fetchUser(userId) {
    return new Promise((resolve, reject) => {
      // Simulating fetching user data from a server
      setTimeout(() => {
        const users = {
          1: { name: 'John', age: 30 },
          2: { name: 'Alice', age: 25 }
        };
        const user = users[userId];
        if (user) {
          resolve(user);
        } else {
          reject(new Error('User not found'));
        }
      }, 1000);
    });
  }
  
  async function getUserDetails(userId) {
    try {
      const user = await fetchUser(userId);
      console.log('User Details:', user);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Usage
  await getUserDetails(1);
  await getUserDetails(3); // This will trigger an error



