import { Button } from "@/common/button";
import { Card } from "@/common/card";
import { Img } from "@/common/image";
import { shoes } from "@/utils/data/shoes";
import { formatCOP } from "@/utils/format-surrency";

export default function page() {
    const { name, active, gender, images, price, sizes } = shoes[0];

    return (
        <Card>
            <section className="flex justify-between items-center gap-4 ">
                <section className="flex gap-2 items-center">
                    <h2 className="text-4xl">{name}</h2>
                    <span className={`text-white text-xs w-fit rounded px-2 py-1 ${active ? 'bg-green-600' : 'bg-red-600'}`}>
                        {active ? "Activo" : "Inactivo"}
                    </span>
                </section>

                <Button variant="outline" icon='edit' href="/edit-shoe">Editar</Button>
            </section>
            <p>REF:105156751027-934</p>

            <section className="flex flex-col gap-4 mt-4">
                <section className="flex flex-col gap2">
                    <section className="flex items-center gap-1">
                        <p className="text-xl font-bold text-primary">Precio:</p>
                        <p className="text-xl">{formatCOP(price)}</p>
                    </section>
                    <section className="flex items-center gap-1">
                        <p className="text-xl font-bold text-primary">Artículo de:</p>
                        <p className="text-xl">{gender}</p>
                    </section>
                    <section className="flex items-center gap-1">
                        <p className="text-xl font-bold text-primary">Color:</p>
                        <p className="text-xl">Verde Medio</p>
                    </section>
                    <section className="flex items-center gap-1">
                        <p className="text-xl font-bold text-primary">Tallas disponibles:</p>
                        <div className='flex gap-4'>
                            {sizes.map(val => (
                                <p key={val}>{val}</p>
                            ))}
                        </div>
                    </section>
                </section>

                <section className='grid grid-cols-4 gap-4'>
                    {images.map((img) => (
                        <Img key={img}  src={img} alt='img' />
                    ))}
                </section>
            </section>

        </Card>
    );
}
