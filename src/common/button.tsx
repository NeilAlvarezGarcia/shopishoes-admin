import Link from "next/link";
import { FC } from "react";
import { Icon, IconName } from "./icon";

const variantStyles = {
    'primary': 'text-white bg-primary',
    'secondary': 'bg-secondary text-primary',
    'outline': 'bg-transparent border border-foreground text-foreground',
    'link': 'p-0 text-primary hover:underline',
    'danger': 'bg-red-500 text-white',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    variant?: keyof typeof variantStyles;
    icon?: IconName;
    href?: string;
    loading?: boolean;
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', icon, href, children, className = '', ...props }) => {
    const styles = `px-4 py-2 hover:opacity-80 rounded capitalize cursor-pointer w-fit flex items-center gap-2 ${variantStyles[variant]} ${className}`.trim();

    const content = (
        <>
            {icon && <Icon iconName={icon} />}
            {children}
        </>
    );

    return ( href ? 
        <Link href={href} className={styles} {...props}>{content}</Link> : 
        <button className={styles} {...props}>
            {content}
        </button>
    );
}

