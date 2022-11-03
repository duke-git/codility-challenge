import OddOccurrencesInArray from './OddOccurrencesInArray'

test('OddOccurrencesInArray: test cases', () => {
    expect(OddOccurrencesInArray([0])).toBe(0)

    expect(OddOccurrencesInArray([0, 1])).toBe(0)

    expect(OddOccurrencesInArray([0, 1, 0])).toBe(1)

    expect(OddOccurrencesInArray([0, 1, 2])).toBe(0)

    expect(OddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9])).toBe(7)
})
