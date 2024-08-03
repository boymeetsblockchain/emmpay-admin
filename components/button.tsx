import { Button } from "./ui/button"

export const ButtonComp =({text}:{text:string})=>{
    return(
        <Button  className="w-[196px] bg-[#3e9850] hover:text-[#3e9850] hover:bg-white border" >
      {text}
</Button>
    )
}