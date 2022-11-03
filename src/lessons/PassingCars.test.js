import PassingCars from './PassingCars'

test('PassingCars: test cases', () => {
    expect(PassingCars([0, 1, 0, 1, 1])).toBe(5)
    expect(PassingCars([0])).toBe(0)
    expect(PassingCars([1])).toBe(0)
    expect(PassingCars([0,0])).toBe(0)
    expect(PassingCars([0,1])).toBe(1)
    expect(PassingCars([1,0])).toBe(0)
    expect(PassingCars([1,1])).toBe(0)
})

