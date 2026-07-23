import { ShoeForm } from "@/components/shoe-form";
import { shoes } from "@/utils/data/shoes";

export default function EditShoe() {
  return (
    <ShoeForm shoeData={shoes[1]} />
  );
}
