 function retry(url, count){
        function returnProm(){
            return new Promise((resolve, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onerror = ()=> reject("Network Error !!");
                xhr.onload = ()=>{
                    switch(xhr.status){
                        case 200:
                            resolve(JSON.parse(xhr.responseText));
                            return;
                    }
                }
                xhr.send();
            })
        }
        
async function proceedProm(){
    for(let i=0; i<count; i++){
            try{
                const data = await returnProm(url);
                console.log(data);
                break;
            } catch(err){
                await new Promise(resolve=> setTimeout(resolve, 500*Math.pow(2,i)));
                console.log(`Attempt ${i+1} failed`);
                if(i === count-1){
                    setTimeout(console.log(`Failed after ${count} attempt(s)`), );
                }
            }
        }
    }
    proceedProm();
}        
retry("https://jsonpaceholder.typicode.com/posts", 3)