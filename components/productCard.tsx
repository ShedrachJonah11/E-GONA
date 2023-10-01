import { Card, CardBody, CardFooter, Button, Image } from "@nextui-org/react";
import { useState } from "react";
import cart from "../public/cart.svg";
interface card {
  src: string;
  index: number;
  price: string;
  saleScale: string;
  title: string;
}
export default function ProductCard({
  src,
  index,
  title,
  saleScale,
  price,
}: card) {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    if(count>0){
        setCount(count - 1);
    }
  };
  return (
    <Card
      shadow="md"
      key={index}
      className="shadow-sm rounded-md w-full sm:w-fit p-0 " style={{
        padding:"0px"
      }}
    >
      <CardBody className="p-0 max-w-[unset] w-full" style={{
        maxWidth:"unset"
        
      }}>
        <Image removeWrapper src={src} className="w-full m-auto  h-[200px] object-cover max-w-[unset]"  />
        <CardFooter className="text-small justify-between flex flex-col gap-3 w-full p-0 pt-2">
          <div className="px-2 w-full">
            <div className="flex justify-between">
              <b>{title}</b>
              <div className="flex justify-center items-center">
                <Button className="w-fit p-1" onClick={decreament}>
                  -
                </Button>
                <span>{count}</span>
                <Button className="w-fit p-1" onClick={increament}>
                  +
                </Button>
              </div>
            </div>
            <div className="flex justify-between">
              <p>price(per {saleScale}):</p>
              <p className="text-default-500">{price}</p>
            </div>
          </div>
          <Button className="flex gap-2 w-full bg-[#38B419] text-white py-2">
            <Image src="cart copy.svg" />
            <span>Add to cart</span>
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
}
