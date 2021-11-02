import { ProjectMemberships } from './projectMemberships'

describe('ProjectMemberships', () => {
    it('creates an instance', () => {
        expect(new ProjectMemberships({ accessToken: '12345' })).toBeTruthy()
    })
})
