import { useQuery } from "@tanstack/react-query"
import { UserIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"
import { Label } from "./ui/label"


const getUser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${Math.ceil(Math.random() * 10)}`)
    return await response.json()
}

export default function User() {
    const { data, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: getUser
    })

    if(isLoading){
    return <div className="text-white p-10 text-center">Loading...</div>
    }

    return(
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button className="bg-[#20283f] h-[50px] w-[50px] flex items-center justify-center"><UserIcon className="size-[30px]"/></Button>
                </PopoverTrigger>
                <PopoverContent className="border border-slate-800 rounded-xl bg-[#010915] w-auto space-y-2 ml-[48px] p-[24px] pt-[16px]">
                    <div className="flex items-center text-white gap-2 mb-[16px] text-[18px]">
                        <p>Name: {data.name}</p>
                        <p className="ml-[8px]">Email: {data.email}</p>
                    </div>
                    <Label htmlFor="address" className="text-white text-[18px] font-normal">Your address: {data.address.street}, {data.address.suite}</Label>
                </PopoverContent>
            </Popover>
        </div>
    )
}