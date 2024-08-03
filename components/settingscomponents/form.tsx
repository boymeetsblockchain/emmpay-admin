import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ButtonComp } from "../button";

const Form = () => {
    return (
      <div className="p-5 ">
           <div className="flex flex-col md:flex-row items-start justify-between gap-x-5 space-y-6 md:space-y-0">
            <div className="flex-shrink-0">
                <Image src={'/settings.png'} height={130} width={132} alt="pic" />
            </div>
            <div className="flex flex-col space-y-4 w-full max-w-lg">
                <div className="mb-4">
                    <Label className="text-sm mb-2 font-normal">
                        Your Name
                    </Label>
                    <Input
                        placeholder="Charlene Reed"
                        className="placeholder:text-green-500 w-full"
                    />
                </div>
                <div className="mb-4">
                    <Label className="text-sm mb-2 font-normal">
                        Email
                    </Label>
                    <Input
                        placeholder="charlenereed@gmail.com"
                        className="placeholder:text-green-500 w-full"
                    />
                </div>
                <div className="mb-4">
                    <Label className="text-sm mb-2 font-normal">
                        Date of Birth
                    </Label>
                    <Input
                        placeholder="25 January 1990"
                        className="placeholder:text-green-500 w-full"
                    />
                </div>
                <div className="mb-4">
                    <Label className="text-sm mb-2 font-normal">
                        Permanent Address
                    </Label>
                    <Input
                        placeholder="San Jose, California, USA"
                        className="placeholder:text-green-500 w-full"
                    />
                </div>
                <div className="mb-4">
                    <Label className="text-sm mb-2 font-normal">
                        Postal Code
                    </Label>
                    <Input
                        placeholder="45962"
                        className="placeholder:text-green-500 w-full"
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-4 w-full max-w-lg">
                <div className="mb-4">
                    <Label className="text-sm mb-2 font-normal">
                        User Name
                    </Label>
                    <Input
                        placeholder="Charlene Reed"
                        className="placeholder:text-green-500 w-full"
                    />
                </div>
                <div className="mb-4">
                    <Label className="text-sm mb-2 font-normal">
                        Password
                    </Label>
                    <Input
                        type="password"
                        placeholder="**********"
                        className="placeholder:text-green-500 w-full"
                    />
                </div>
                <div className="mb-4">
                    <Label className="text-sm mb-2 font-normal">
                        Present Address
                    </Label>
                    <Input
                        placeholder="San Jose, California, USA"
                        className="placeholder:text-green-500 w-full"
                    />
                </div>
                <div className="mb-4">
                    <Label className="text-sm mb-2 font-normal">
                        City
                    </Label>
                    <Input
                        placeholder="San Jose"
                        className="placeholder:text-green-500 w-full"
                    />
                </div>
                <div className="mb-4">
                    <Label className="text-sm mb-2 font-normal">
                        Country
                    </Label>
                    <Input
                        placeholder="USA"
                        className="placeholder:text-green-500 w-full"
                    />
                </div>
            </div>
        </div>
        <div className="flex justify-end mt-5">
                    <ButtonComp text="Save" />
                </div>
      </div>
    );
}

export default Form;
