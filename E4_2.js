function findProp(obj, str){
    for(let key in obj){
        if(key == str){
            return true
        }
    }
    return false
}

const my_obj2 = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4
}
const my_str = "fourth"
const my_str_false = "fifth"
console.log(findProp(my_obj2, my_str))
console.log(findProp(my_obj2, my_str_false))
