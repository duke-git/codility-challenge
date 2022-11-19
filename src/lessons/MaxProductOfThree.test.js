import MaxProductOfThree from './MaxProductOfThree'

test('MaxProductOfThree: test cases', () => {
    expect(MaxProductOfThree([-3, 1, 2, -2, 5, 6])).toBe(60)
    expect(MaxProductOfThree([-5, 4, -5, 2])).toBe(100)
})
