import CountDiv from './CountDiv'

test('CountDiv: test cases', () => {
    expect(CountDiv(6, 11, 2)).toBe(3)
    expect(CountDiv(0, 1, 11)).toBe(1)
})
