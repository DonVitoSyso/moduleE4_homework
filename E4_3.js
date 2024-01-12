function objWithoutProto(){
    const emptyObj = Object.create(null)
    return emptyObj
}

console.log(objWithoutProto())
