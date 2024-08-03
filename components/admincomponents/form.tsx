import { ButtonComp } from "../button";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Form = () => {
    return ( 
        <div>
            <h1 className='text-2xl font-semibold text-[#343C6A] mb-4 '>Send Money</h1>
            <form className="bg-white shadow-md w-[300px] h-[400px] px-4 py-5 flex  flex-col space-y-4" >
             <div>
                <Label className="font-medium text-sm ">
                    Account Name
                </Label>
                <Input placeholder="John Doe" className="rounded-none py-3 px-2"/>
             </div>
             <div>
                <Label className="font-medium text-sm ">
                    Account Number
                </Label>
                <Input placeholder="0000 0000 0000 0000" className="rounded-none py-3 px-2"/>
             </div>
             <div>
                <Label className="font-medium text-sm ">
                 Bank
                </Label>
                <Input placeholder=" Union" className="rounded-none py-3 px-2"/>
             </div>
             <div>
                <Label className="font-medium text-sm ">
                    Amount
                </Label>
                <Input placeholder="NGN" className="rounded-none py-3 px-2"/>
             </div>
               <div className="flex items-center justify-center">
                <ButtonComp text="SEND"/>
               </div>
            </form>
        </div>
     );
}
 
export default Form;