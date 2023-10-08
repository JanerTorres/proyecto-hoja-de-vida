interface ButtonProps {
    text: string
}


const Button = ({text}: ButtonProps)=>{
    return <button className="button-primary text-lg">{text}</button>;
};

export default Button;