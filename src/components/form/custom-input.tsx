import { FunctionComponent, useId } from "react";
import { field } from "../../tools/type";

type Props = {
    type: string,
    name: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    field: field
}
const CustomInput: FunctionComponent<Props> = ({ onChange, type, placeholder, name, field }) => {
    const id = useId()
    return (
        <div className="mb-3">
            <input
                type={type}
                placeholder={placeholder}
                value={field.value}
                onChange={onChange}
                name={name}
                id={id}
                className="border-none outline-none text-sm bg-background rounded w-full px-4 py-2"
            />
            {
                field.errorMessage !== '' && (
                    <p className="px-1 pt-[1px] text-xs text-red-500">{field.errorMessage}</p>
                )
            }
        </div>
    )
}

export default CustomInput