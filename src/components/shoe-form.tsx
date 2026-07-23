import { Button } from '@/common/button';
import { Card } from '@/common/card';
import { Img } from '@/common/image';
import { Input } from '@/common/input';
import { FC } from 'react';

interface Props {
    shoeData?: { id: number; name: string; price: number; images: string[]; bgImage: string; gender: string; sizes: number[]; active: boolean; };
}

const genderOptions = ['hombre', 'Mujer']
const sizeOptions = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44]

export const ShoeForm: FC<Props> = ({ shoeData }) => {
    const isEditing = !!shoeData;
    const title = isEditing ? 'Cambiar información de artículo' : 'Agrega un artículo nuevo';
    const genderOption = genderOptions[0]

    const images = [
        "https://www.koaj.co/103789-large_default/calzado.jpg",
        'https://www.koaj.co/103793-large_default/calzado.jpg',
        'https://www.koaj.co/103798-large_default/calzado.jpg',
        'https://www.koaj.co/103802-large_default/calzado.jpg'
    ]

    return (
        <Card>
            <section className="flex justify-between items-center gap-4 mb-6">
                <h2 className="text-2xl capitalize">{title}</h2>
                <Button href="." variant="outline" icon='back'>Volver</Button>
            </section>

            <form>
                <section className="mb-4 flex flex-col gap-8">
                    <Input
                        label="Nombre"
                    />
                    <section className="flex gap-4">
                        <Input
                            label="Precio"
                        />
                        <Input
                            label="Color"
                        />
                    </section>


                    <fieldset className="w-full">
                        <legend className="mb-2 block text-sm font-medium text-slate-700">Artículo para</legend>
                        <div className='flex gap-2'>
                            {genderOptions.map(val => (
                                <Button key={val} variant={val === genderOption ? 'primary' : 'outline'}>{val}</Button>
                            ))}
                        </div>
                    </fieldset>

                    <fieldset className="w-full">
                        <legend className="mb-2 block text-sm font-medium text-slate-700">Tallas disponibles</legend>
                        <div className='flex gap-4'>
                            {sizeOptions.map(val => (
                                <Button key={val} variant='outline'>{val}</Button>
                            ))}
                        </div>
                    </fieldset>
                    
                    <div className='flex items-end gap-4'>
                        <Input
                            label="Imágenes del artículo"
                        />
                        <Button icon='plus' variant='outline'>Agregar</Button>
                    </div>

                    <p>Selecciona la imagen de fondo que desees</p>

                    <section className='grid grid-cols-4 gap-4'>
                        {images.map((img, i) => (
                            <picture key={img} className={`rounded p-2 border-2 border-transparent cursor-pointer relative ${i === 0 ? 'border-red-400!' : ''}`}>
                                <Img  src={img} alt='img' />
                                <Button variant='danger' icon='remove' className='absolute top-5 right-5' />
                            </picture>
                        ))}
                    </section>
                </section>

                <section className="flex justify-end">
                    <Button>Crear artículo</Button>
                </section>
            </form>
        </Card>
    );
};
