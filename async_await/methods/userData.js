function fetchUserData(userId){
    return new Promise((resolve)=>{
     setTimeout(()=>{
        resolve({
        id: userId,
        name: 'Salomon Elisha',
        role: "Software engineer"
        })
     }, 1000)   
    })
}