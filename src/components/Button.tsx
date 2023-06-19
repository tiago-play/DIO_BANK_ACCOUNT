import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface ButtonProps {
    text: string,
    onClick: MouseEventHandler
    children: any
  }
  
  export const DButton = ({ text, onClick, children }: ButtonProps) => {
    return(
      <Button 
        onClick={onClick}
        colorScheme="purple"
        size="sm"
        marginTop="5px">
        {children}
        {text}
      </Button>
    )
  }