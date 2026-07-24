import { Button } from "@/common/button";
import { Card } from "@/common/card";
import { Input } from "@/common/input";

export default function Login () {
  return (
    <Card className="flex flex-col gap-4 items-end">
      <Input label="Ingresa tu email" />
      <Button href="/">Ingresar</Button>
    </Card>
  )
}

