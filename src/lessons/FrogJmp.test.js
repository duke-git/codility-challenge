import FrogJmp from './FrogJmp'

test('FrogJmp: test cases', () => {
    expect(FrogJmp(10, 84, 30)).toBe(3)
    expect(FrogJmp(10, 70, 30)).toBe(2)
    expect(FrogJmp(10, 71, 30)).toBe(3)
    expect(FrogJmp(10, 10, 30)).toBe(0)
    expect(FrogJmp(10, 60, 30)).toBe(2)
})
