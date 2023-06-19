/**
 * Vamos capturar o value que vem no target do event
 * e passar este valor para avariável email
 * O Target (alvo) é onde o evento esta sendo disparado, sempre que digitar esta disparando o evento
 * o valor que vem no evento vai ser a letra pressionada.A cada tecla diigtada reconstri o estado do componente
 */

import { Box, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card"
import { MouseEventHandler, useContext, useState } from "react";
import { DButton } from "../components/Button";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [email, setEmail] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await login(email)

        if(!loggedIn){
            return alert('Email inválido!')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true})
        navigate('/conta/1')
    }

    return (
        <Box padding="25px">
            <Card>
            <Center>
        <h1>Faça o Login</h1>
      </Center>
      <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <Input placeholder="password" />
      <Center>
        <DButton
          onClick={() => validateUser(email)}
          text={'Entrar'}
          children={undefined} />
      </Center>
            </Card>
        </Box>
    )
}

export default Home;