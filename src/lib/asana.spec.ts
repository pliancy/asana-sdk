import { Asana } from './asana'

describe('Asana', () => {
    it('creates an instance', () => {
        expect(new Asana({}, 'a', 'a')).toBeTruthy()
    })
})
