import Distinct from './Distinct'

test('Distinct: test cases', () => {
    expect(Distinct([2, 1, 1, 2, 3, 1])).toBe(3)
    expect(Distinct([1, 2, 3])).toBe(3)
    expect(Distinct([1, 1, 1])).toBe(1)
    expect(Distinct([1])).toBe(1)
    expect(Distinct([])).toBe(0)
})
