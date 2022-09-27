exports.sum = (a,b) => {
    return a+b
}

exports.modulus = (num)=>{
    return (num) > 0 ? num : -num
}

exports.sayHello = () => {
    return "Hello!!!"
}

exports.duplicateObject = (Obj)=>{
    return {...Obj}
}

exports.addProduct = ( product, cart) =>{
    return cart.push(product)
}