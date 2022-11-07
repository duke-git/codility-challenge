import PermMissingElem from './PermMissingElem'

test('PermMissingElem: test cases', () => {
    expect(PermMissingElem([2, 3, 1, 5])).toBe(4)
    expect(PermMissingElem([])).toBe(1)
    expect(PermMissingElem([1])).toBe(2)
    expect(PermMissingElem([0])).toBe(2)
    expect(PermMissingElem([1, 3])).toBe(2)
})
