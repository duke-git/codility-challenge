import TapeEquilibrium from './TapeEquilibrium'

test('TapeEquilibrium: test cases', () => {
    expect(TapeEquilibrium([3, 1, 2, 4, 3])).toBe(1)
    expect(TapeEquilibrium([-10, -20, -30, -40, 100])).toBe(20)
})
