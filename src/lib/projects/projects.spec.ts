import { Projects } from './projects'

describe('Projects', () => {
    it('creates an instance', () => {
        expect(new Projects({ accessToken: '12345' }, 'workspace')).toBeTruthy()
    })
})
