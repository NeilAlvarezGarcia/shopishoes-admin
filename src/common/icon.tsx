import { ChevronLeft, ListFilter, LucideProps, Plus, Trash2 } from 'lucide-react';
import { FC } from 'react';

const icons = {
    plus: Plus,
    filter: ListFilter,
    back: ChevronLeft,
    remove: Trash2,
};

export type IconName = keyof typeof icons;

interface IconProps extends LucideProps {
    iconName: IconName;
}

export const Icon: FC<IconProps> = ({ iconName, size = 20, ...props }) => {
    const Element = icons[iconName]
    return (
        <Element size={size} {...props} />
    );
};
