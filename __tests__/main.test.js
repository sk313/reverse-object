import reverseObj from "../main"

describe('test reverseObj function', () => {
    const inputValue = {
        hired: {
            be: {
                to: {
                    deserve: 'I'
                }
            }
        }
    }
    
    const outputValue = {
        I: {
            deserve: {
                to: {
                    be: 'hired'
                }
            }
        }
    }

    test('return input value if its type is not object', () => {
        const num = 1
        const str = '1'
        const arr = [1, 2]
        const func = () => {}
        expect(reverseObj(num)).toBe(num)
        expect(reverseObj(str)).toBe(str)
        expect(reverseObj(arr)).toBe(arr)
        expect(reverseObj(func)).toBe(func)
    })

    test('return input value if null or empty object', () => {
        expect(reverseObj(null)).toBeNull()
        expect(reverseObj({})).toEqual({})
    })

    test('reverse object correctly', () => {
        expect(reverseObj(inputValue)).toEqual(outputValue)
    })
})