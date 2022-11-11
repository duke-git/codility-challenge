import MaxCounters from './MaxCounters'

test('MaxCounters: test cases', () => {
    expect(MaxCounters(5, [3, 4, 4, 6, 1, 4, 4])).toStrictEqual([3, 2, 2, 4, 2])
})