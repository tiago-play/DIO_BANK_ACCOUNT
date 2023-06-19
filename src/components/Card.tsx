
import { Box } from "@chakra-ui/react"

export const Card = ({ children }: any) => {
  
  return (
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="10px">
      { children }
    </Box>
  )
}