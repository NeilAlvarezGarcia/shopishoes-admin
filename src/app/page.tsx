import { Button } from "@/common/button";
import { ShoeCard } from "@/components/shoe-card";
import { shoes } from "@/utils/data/shoes";

export default function Home() {
  return (
    <div>
      <section className="flex items-center gap-8 justify-between mb-4">
        <div className="flex items-center gap-4 flex-1">
          <input type="text" className="border border-gray-300 p-2 w-full max-w-xl" placeholder="Search..." />
          <Button variant="secondary" icon="filter">Filters</Button>
        </div>

        <Button href='/create-shoe' icon="plus">Agregar nuevo artículo</Button>
      </section>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
        {shoes.map((shoe) => (
          <li key={shoe.id} >
            <ShoeCard
              name={shoe.name}
              price={shoe.price}
              bgImage={shoe.bgImage}
              active={shoe.active}
            />
          </li>
        ))}
      </ul>

      <section className='flex flex-col gap-4 items-center'>
        <p>Mostrando 10 de 140 artículos</p>
        <Button variant="outline">Cargar más</Button>
      </section>
    </div>
  );
}
