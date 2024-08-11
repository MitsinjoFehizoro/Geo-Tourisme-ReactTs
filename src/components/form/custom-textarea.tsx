import { FunctionComponent } from "react";
import { field } from "../../tools/type";

type Props = {
    field: field,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    name: string,
    placeholder: string
}
const CustomTextarea: FunctionComponent<Props> = ({ field, onChange, name, placeholder }) => {

    return (
        <div className="mb-2">
            <textarea
                className="border-none outline-none bg-background text-sm rounded w-full h-36 px-4 py-2 "
                placeholder={placeholder}
                name={name}
                value={field.value}
                onChange={onChange}
            />
            {
                field.errorMessage !== '' && (
                    <p className="px-1 pt-[1px] text-xs text-red-500">{field.errorMessage}</p>
                )
            }
        </div>
    )
}
export default CustomTextarea