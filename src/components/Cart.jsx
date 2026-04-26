import { CircleX, Trash2,  ShoppingCart } from "lucide-react";
import { useShallow } from 'zustand/react/shallow';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useStore } from "@/store/store";
import { ChangeQtyButtons } from "./changeQtyButton";

export default function Cart() {
    const {reset, products, removeProduct, total} = useStore(
        useShallow((state) => ({
            reset: state.reset,
            products: state.products,
            removeProduct: state.removeProduct,
            total: state.total
        }))
    )

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="bg-[#20283f] h-[50px] w-[50px] flex items-center justify-center">
                    <ShoppingCart className="size-[24px]" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="space-y-2 w-96 bg-[#010915] border border-slate-800">
                <div className="flex gap-2 text-lg items-center">
                    <h1 className="text-white">Cart:</h1>
                    <Button onClick={reset} variant="destructive" size="icon">
                        <CircleX />
                    </Button>
                </div>
                <div>
                    {products.map((product) => (
                        <Card key={product.id} className="bg-[#010915] border border-slate-800 text-white">
                            <CardHeader>
                                <CardTitle>{product.name}</CardTitle>
                                <Button onClick={() => removeProduct(product.id)} size="icon" variant="destructive"><Trash2/></Button>
                            </CardHeader>
                            <CardContent>{product.price}$</CardContent>
                            <CardFooter>
                                <ChangeQtyButtons productId={product.id}/>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <p className="text-white">Total: {total}$</p>
            </PopoverContent>
        </Popover>
    )
}