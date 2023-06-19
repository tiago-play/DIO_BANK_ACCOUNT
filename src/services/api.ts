const conta = {
    email: 'tiagobr15@gmail.com',
    password: '123456',
    name: 'Tiago',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})