import { FC } from "react";
import { Card } from "@/common/card";
import { Img } from "@/common/image";
import { formatCOP } from "@/utils/format-surrency";
import Link from "next/link";

interface ShoeCardProps {
    name: string;
    price: number;
    bgImage: string;
    active: boolean;
}

export const ShoeCard: FC<ShoeCardProps> = ({ name, price, bgImage, active }) => {
    return (
        <Card className="flex items-end h-80 lg:h-100">
            <Img src={bgImage} alt={name} className="absolute inset-0 -z-10 w-full h-full object-cover" />
            
            <div className="absolute -z-5 inset-x-0 bottom-0 h-30 bg-linear-to-t from-black/85 to-transparent" />

            <div className="flex flex-col gap-1">
                <span className={`text-white text-xs w-fit rounded px-2 py-1 ${active ? 'bg-green-600' : 'bg-red-600'}`}>
                    {active ? "Activo" : "Inactivo"}
                </span>
                <h3 className="text-lg text-white">{name}</h3>
                <p className="text-white">{formatCOP(price)}</p>
                {/* <Link href='shoe'>View</Link> */}
            </div>
        </Card>
    );
};
