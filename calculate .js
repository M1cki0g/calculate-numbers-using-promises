let ans = Number(prompt("2 + 2 = "))

      function answer(ans){
            return new Promise((resolve , reject)=>{
                  if(ans===4){
                    resolve()
                    }
                    else{
                      reject()
                      }
                  })
              }
              
              answer(ans).then(()=>{
                  console.log("correct")
                })
                .catch(()=>{
                      console.log("not correct")
                  });
      
