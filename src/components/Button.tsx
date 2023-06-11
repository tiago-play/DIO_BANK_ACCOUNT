interface ButtonProps {
    text: string,
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
    children: any
  }
  
  export const Button = ({ text, onClick, children }: ButtonProps) => {
    return(
      <button onClick={onClick}>
        {children}
        {text}
      </button>
    )
  }