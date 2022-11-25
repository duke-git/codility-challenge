import Triangle from './Triangle'

test('Triangle: test cases', () => {
    expect(Triangle([10, 50, 5, 1])).toBe(0)
    expect(Triangle([10, 2, 5, 1, 8, 20])).toBe(1)
})
