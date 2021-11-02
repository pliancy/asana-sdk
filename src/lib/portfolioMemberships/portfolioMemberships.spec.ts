import { PortfolioMemberships } from './portfolioMemberships'

describe('PortfolioMembersships', () => {
    it('creates an instance', () => {
        expect(new PortfolioMemberships({ accessToken: '12345' }, 'workspace')).toBeTruthy()
    })
})
