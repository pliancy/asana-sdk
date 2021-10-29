import { TeamMemberships } from './teamMemberships'

describe('TeamMemberships', () => {
    it('creates an instance', () => {
        expect(new TeamMemberships({ accessToken: '12345' })).toBeTruthy()
    })
})
