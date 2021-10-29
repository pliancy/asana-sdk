import { Users } from './users'

describe('Users', () => {
    it('creates an instance', () => {
        expect(new Users({ accessToken: '12345' })).toBeTruthy()
    })
})
