import BinaryGap from './BinaryGap'

test('BinaryGap: number 529 contains binary gap of max length is 4', () => {
    expect(BinaryGap(529)).toBe(4)
})

test('BinaryGap: number 20 contains binary gap of max length is 1', () => {
    expect(BinaryGap(20)).toBe(1)
})

test('BinaryGap: number 9 contains binary gap of max length is 2', () => {
    expect(BinaryGap(9)).toBe(2)
})

test('BinaryGap: number 32 contains binary gap of max length is 0', () => {
    expect(BinaryGap(32)).toBe(0)
})

test('BinaryGap: number 15 contains binary gap of max length is 0', () => {
    expect(BinaryGap(15)).toBe(0)
})