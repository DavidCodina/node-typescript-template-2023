import { sum } from './index.js'

describe('sum()...', () => {
  test('should add 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5)
  })
})
