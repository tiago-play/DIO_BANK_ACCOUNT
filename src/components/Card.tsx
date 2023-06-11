import { Header } from "./Header/Header"
import { Footer } from "./Footer"
import { Button } from "./Button"
import { login  } from "../services/login"



export const Card = () => {
  return (
    <>
      <Header />
        <p>Cadastre-se</p>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <Button onClick={login} text={'Cadastrar'} children={undefined} />
      <Footer />
    </>

  )
}