function trial(arg, cb ){
    arg = arg+1;
    cb(arg);
}

trial(10,(arg)=>{
    console.log(arg);
})