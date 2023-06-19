import { login } from "./login"

// exemplo usando mock
// const mockSetIsLoggedIn = jest.fn()
// const mockNavigate = jest.fn()

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }))

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate
// }))

describe('login', () => {
      
    const mockEmail = 'tiagobr15@gmail.com'
    it('Deve exibir um alert com boas vindas', async() => {
        const response = await login (mockEmail)
        expect(response).toBeTruthy()
        // await login(mockEmail)
        // expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        // expect(mockNavigate).toHaveBeenCalledWith('/1')
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@invalido.com.br')
        expect(response).toBeFalsy()
        // await login('email@invalido.org')
        // expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
    })

}) 