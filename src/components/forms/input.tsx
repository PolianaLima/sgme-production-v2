import style from './input.module.css';
type InputProps =React.ComponentProps<'input'> & {
    label: string;
    error?: string;
}

export default function Input ({label,error, ...props}:InputProps){
    return(
        <div className="mb-2 w-100">
            <label className={`${style.label}`} htmlFor={props.name}>{label}</label>
            <input className={`${style.input}`} type="text" id={props.name} {...props} />
        </div>
    )
}