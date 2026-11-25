async function getUsers(){
    console.log("fetching users");
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data);
}
getUsers()