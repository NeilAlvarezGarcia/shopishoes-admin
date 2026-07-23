import { Button } from '@/common/button';
import { Card } from '@/common/card';
import { Input } from '@/common/input';
import { FC } from 'react';

interface Props {
    shoeData?: {
        name: string;
        price: number;
        bgImage: string;
        active: boolean;
    };
}

export const ShoeForm: FC<Props> = ({shoeData}) => {
    const isEditing = !!shoeData
    const title = isEditing ? 'Cambiar información de artículo' : 'Agrega un artículo nuevo'

    return (
        <Card>
            <section className="flex justify-between items-center gap-4 mb-4">
                <h2 className="text-2xl capitalize">{title}</h2>
                <Button href="." variant="outline" icon='back'>Volver</Button>
            </section>

            <form action="">
                <section className="mb-4 flex flex-col gap-4">
                    <Input
                        label="Nombre"
                    />
                    <section className="flex gap-4">
                        <Input
                            label="Precio"
                        />

                        <fieldset className="w-full">
                            <legend className="mb-2 block text-sm font-medium text-slate-700">Calzado de</legend>
                            <div className="flex gap-2">
                                <label className="inline-flex items-center gap-2">
                                    <input type="radio" name="gender" value="Hombre" className="accent-primary" />
                                    <span>Hombre</span>
                                </label>
                                <label className="inline-flex items-center gap-2">
                                    <input type="radio" name="gender" value="Mujer" className="accent-primary" />
                                    <span>Mujer</span>
                                </label>
                            </div>
                        </fieldset>
                    </section>
                </section>

                <section className="flex justify-end">
                    <Button>Crear artículo</Button>
                </section>
            </form>
        </Card>
    );
};
