import { Teams } from './teams'

describe('Teams', () => {
    it('creates an instance', () => {
        expect(new Teams({ accessToken: '12345' }, 'workspace')).toBeTruthy()
    })
})
