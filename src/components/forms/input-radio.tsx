type InputProps = React.ComponentProps<'input'> & {
    label: string;
}

export default function InputRadio({label, ...props}: InputProps) {
    return (
        <div>
            <input type="radio"
                   id={props.name}
                   className="me-3"
                   {...props}
            />
            <label htmlFor={props.name}>{label}</label>
        </div>
    )
}