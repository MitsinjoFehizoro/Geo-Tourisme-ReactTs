import { FunctionComponent, useId } from "react";

type Props = {
    type: string,
    value: string,
    name: string,
    placeholder: string,
    errorMessage: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
const CustomInput: FunctionComponent<Props> = ({ value, onChange, type, placeholder, name, errorMessage }) => {
    const id = useId()
    return (
        <div className="mb-3">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                id={id}
                className="border-none outline-none text-sm bg-background rounded w-full px-4 py-2"
            />
            {
                errorMessage !== '' && (
                    <p className="px-1 pt-[1px] text-xs text-red-500">{errorMessage}</p>
                )
            }
        </div>
    )
}

export default CustomInput