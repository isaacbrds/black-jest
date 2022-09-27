const { sum, modulus, sayHello, duplicateObject, addProduct } = require('./functions.js');

test("should sum two numbers", ()=>{
    const result = sum(1,2);

    expect(result).toBe(3);
})

test("should return the absolute value of number", ()=>{
    const result = modulus(-3)

    expect(result).toBe(3)
    expect(modulus(3)).toBe(3)
})


test("should return Hello!!! to someone", ()=>{
    expect(sayHello()).toBe('Hello!!!')
})


test("should returns an duplicated object", ()=>{
    expect(duplicateObject({nome: "João"})).toEqual({nome: "João"})
})


test('should add product to cart', () => {
    const cart = []

    addProduct('notebook', cart)
    addProduct('blue pen', cart)
    addProduct('red pen', cart)

    expect(cart).toContain('notebook')
    expect(cart).toContain('blue pen')
    expect(cart).not.toContain('pencil')
})