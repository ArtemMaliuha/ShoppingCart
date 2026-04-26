import { Minus, Plus } from "lucide-react";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { Button } from "./ui/button";
import { useStore } from "@/store/store";

export function ChangeQtyButtons({productId}){
    const { product, incQty, decQty, setTotal} = useStore(
        useShallow((state) => ({
            product: state.products.find(p => p.id === productId),
            incQty: state.incQty,
            decQty: state.decQty,
            setTotal: state.setTotal
        }))
    )

    useEffect(() => {
        const unSub = useStore.subscribe(
            (state) => state.products,
            (products) => {
                setTotal(
                    products.reduce((acc, item) => acc + item.price * item.qty, 0)
                )
            },
            { fireImmediately: true }
        )
        return unSub
    }, [setTotal])

    return (
        <>
            {product && (
                <div className="flex gap-2 items-center">
                    <Button onClick={() => decQty(product.id)} size="icon">
                        <Minus/>
                    </Button>
                    <p className="text-white text-[20px]">{product.qty}</p>
                    <Button onClick={() => incQty(product.id)} size="icon">
                        <Plus/>
                    </Button>
                </div>
            )}
        </>
    )
}