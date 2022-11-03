import CyclicRotation from './CyclicRotation'

test('CyclicRotation: test cases', () => {
    expect(CyclicRotation([3, 8, 9, 7, 6], 3)).toStrictEqual([9, 7, 6, 3, 8])
    expect(CyclicRotation([0, 0, 0], 3)).toStrictEqual([0, 0, 0])
    expect(CyclicRotation([1, 2, 3, 4], 4)).toStrictEqual([1, 2, 3, 4])
})
