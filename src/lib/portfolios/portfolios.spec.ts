import { Portfolios } from './portfolios'

describe('Portfolio', () => {
    it('creates an instance', () => {
        expect(new Portfolios({ accessToken: '12345' }, 'workspace', 'owner')).toBeTruthy()
    })
})
