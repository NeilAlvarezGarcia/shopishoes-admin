import { FC } from "react";

export const Card: FC<React.HTMLAttributes<HTMLDivElement>> = ({className, ...props}) => {
  return (
    <section className={`border border-gray-300 p-4 rounded relative ${className || ''}`} {...props}>
      {props.children}
    </section>
  )
}
