const {readFile, writeFile, read} = require('fs');

readFile('./folder/subfolder/test1.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const test1 = result;
    readFile('./folder/test.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const test = result;
        writeFile('./folder/result.txt',`Here's the result ${test1} & ${test}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })

})