function foo_obg(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(key)
        }
    }
}

const my_obj = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4
}

foo_obg(my_obj)
