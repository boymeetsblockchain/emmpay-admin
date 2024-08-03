

interface CardProps {
    icon: React.ReactNode;
    color: string;
    background: string;
    text: string;
    number: string;
}

export const Card = ({
    icon,
    color,
    background,
    text,
    number
}: CardProps) => {
    return (
        <div className="h-[100px] w-[255px] flex px-4 space-x-4 justify-center items-center bg-white shadow-md rounded-md">
            <div
                className="w-[50px] h-[50px] flex items-center justify-center rounded-full"
                style={{ backgroundColor: background }}
            >
                {icon}
            </div>
            <div>
                <h2
                    className="font-normal text-lg"
                    style={{ color: color }}
                >
                    {text}
                </h2>
                <h2 className="text-2xl text-[#232323] font-semibold">
                    {number}
                </h2>
            </div>
        </div>
    );
};
