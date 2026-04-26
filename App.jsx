import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/products/productCard";
import User from "@/components/User";
import Cart from "@/components/Cart";

const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    return await response.json()
}

export default function App() {
  const {data, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })
  
  const productCardsElement = data?.map(product => {
    return <ProductCard  key={product.id} name={product.title} price={product.price} image={product.image} id={product.id}/>
  })

  if(isLoading){
    return <div className="text-white p-10 text-center">Loading...</div>
  }

  return(
    <div>
      <div className="flex justify-between mt-[12px]">
        <User />
        <Cart />
      </div>
      <div className="mt-[8px]"> 
        <p className="text-white text-[32px]">Products:</p>
        <div className="grid grid-cols-3 gap-[32px]">
          {productCardsElement}
        </div>
      </div>
    </div>
  )
}