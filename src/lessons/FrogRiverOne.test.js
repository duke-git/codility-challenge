import FrogRiverOne from './FrogRiverOne'

test('FrogRiverOne: test cases', () => {
    expect(FrogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6)
    expect(FrogRiverOne(1, [1])).toBe(0)
    expect(FrogRiverOne(5, [1, 2, 3, 5, 3, 1, 2])).toBe(-1)
})
