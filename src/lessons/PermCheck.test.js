import PermCheck from './PermCheck'

test('PermCheck: test cases', () => {
    expect(PermCheck([4, 1, 2, 3])).toBe(1)
    expect(PermCheck([4, 1, 3])).toBe(0)
    expect(PermCheck([3, 1, 2])).toBe(1)
})
