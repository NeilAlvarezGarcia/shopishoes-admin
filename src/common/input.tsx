import { FC } from "react";

interface InputProps extends Omit<React.HtmlHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'className' | 'id'> {
    label?: string;
    error?: string;
}

export const Input: FC<InputProps> = ({ label, error, ...props }) => {
    return (
        <fieldset className="w-full">
            <label htmlFor={label} className="font-bold text-lg">{label}</label>
            <input id={label} className="border border-secondary rounded p-2 w-full" {...props} />
        </fieldset>
    );
};
