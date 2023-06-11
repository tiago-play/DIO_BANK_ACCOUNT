import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Olá, seja bem vindo ao programa Dio Bank')
    })
})