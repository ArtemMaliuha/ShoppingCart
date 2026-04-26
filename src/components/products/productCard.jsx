import { Button } from "../ui/button";
import { Card, CardHeader, CardFooter, CardContent } from "../ui/card";
import { ChangeQtyButtons } from "../changeQtyButton";
import { useStore } from "@/store/store";

export default function ProductCard({name, price, image, id}){

    const addProduct = useStore((state) => state.addProduct)
    const cartProducts = useStore((state) => state.products)

    return(
        <Card className="bg-transparent border border-slate-800 rounded-xl py-[28px] px-[8px] mt-[12px] flex flex-col justify-between">
            <CardHeader>
                <img src={image} className="w-[80px] h-[80px] mb-[16px]" />
                <h2 className="text-white text-[20px]">{name}</h2>
            </CardHeader>
            <CardContent><p className="text-white text-[18px]">{price}$</p></CardContent>
            <CardFooter>
                {cartProducts.find(product => product.id === id) ? <ChangeQtyButtons productId={id}/> : <Button onClick={() => addProduct({name, price, image, id})} className="text-black bg-white text-[18px] font-normal py-[18px] px-[18px] w-[120px] hover:text-white">Add to cart</Button> }
            </CardFooter>
        </Card>
    )
}