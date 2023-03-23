const {translate, findClosingOf, findOpeningOf} = require('./utils')

const test0 = '👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊'
const test1 = '👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊'
const test2 = '👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊'

describe("Translate tests", ()=> {
    test('translates "H"', () => {
        expect(translate(test0)).toBe("H")
    }),
    test('translates "Hello"', () => {
        expect(translate(test1)).toBe("Hello")
    }),
    test('translates "Hello World!"', () => {
        expect(translate(test2)).toBe("Hello World!\n")
    })
})

describe("Funtion test findClosingOf & findOpeningOf", () =>{
    const t0 = Array.from('🤜👉👉👉🤛')
    const t1 = Array.from('🤜🤜🤛🤛')
    const t2 = Array.from('🤜👉🤜👉🤜👉🤜👉👉👉🤛👉👉🤛👉👉🤛👉👉🤛')
    
    test("only 1 loop", () => {
        expect(findClosingOf(t0, 0)).toBe(4)
    }),
    test("2 loops", () => {
        expect(findClosingOf(t1, 0)).toBe(3)
    }),
    test("3 loops", () => {
        expect(findClosingOf(t2, 0)).toBe(19)
    }),
    test("3 loops starting at 2", () => {
        expect(findClosingOf(t2, 2)).toBe(16)
    })

    test("only 1 loop", () => {
        expect(findOpeningOf(t0, 4)).toBe(0)
    }),
    test("2 loops", () => {
        expect(findOpeningOf(t1, 3)).toBe(0)
    }),
    test("3 loops", () => {
        expect(findOpeningOf(t2, 19)).toBe(0)
    }),
    test("3 loops starting at 2", () => {
        expect(findOpeningOf(t2, 16)).toBe(2)
    })
})