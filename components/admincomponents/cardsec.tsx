import Image from "next/image";

interface CardProps {
    src:string
    color: string;
    text: string;
    number: string;
}

export const CardSec = ({
    src,
    color,
    text,
    number
}: CardProps) => {
    return (
        <div className="h-[100px] w-[255px] flex px-4 space-x-4 justify-center items-center bg-white shadow-md rounded-md">
              <div>
                <Image className=" flex items-center justify-center rounded-md" src={`/${src}`}  width={50} height={50} alt={text}/>
              </div>
             <div>
                <h2 className={`text-[${color}] font-normal text-lg`}>{text}</h2>
                <h2 className='text-2xl text-[#232323] font-semibold'>{number}</h2>
            </div>
        </div>
    )
}