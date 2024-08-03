import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ButtonComp } from "../button";

const Security = () => {
    return (
        <div className="px-4 py-6">
            <h1 className="text-[#333B69] font-medium text-2xl mb-4">
                Two-factor Authentication
            </h1>
            <div className="flex items-center space-x-3 mb-4">
                <div>
                    <Image src={'/button.png'} alt="button" width={56} height={31} />
                </div>
                <p className="text-lg font-normal">
                    Enable or disable two-factor authentication
                </p>
            </div>
            <form className="flex flex-col gap-y-4 w-full">
                <h2 className="text-[#333B69] text-lg font-medium mb-4">
                    Change Password
                </h2>
                <div className="mb-4">
                    <Label className="text-sm mb-2 font-normal">
                        Current Password
                    </Label>
                    <Input
                        placeholder="**********"
                        className="placeholder:text-green-500 w-1/2"
                    />
                </div>
                <div className="mb-4">
                    <Label className="text-sm mb-2 font-normal">
                        New Password
                    </Label>
                    <Input
                        placeholder="**********"
                        className="placeholder:text-green-500 w-1/2"
                    />
                </div>
                <div className="flex justify-end">
                    <ButtonComp text="Save" />
                </div>
            </form>
        </div>
    );
}

export default Security;
