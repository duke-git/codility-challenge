import GenomicRangeQuery from './GenomicRangeQuery'

test('GenomicRangeQuery: test cases', () => {
    expect(GenomicRangeQuery('CAGCCTA', [2, 5, 0], [4, 5, 6])).toStrictEqual([2, 4, 1])
})
