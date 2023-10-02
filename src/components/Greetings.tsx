type GreetingsProps =  {
  text: string;
}

const Greetings = ({text} : GreetingsProps) => (
  <p>{text}</p>
)

export default Greetings