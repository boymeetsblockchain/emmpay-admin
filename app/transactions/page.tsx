import CardSecondary from "@/components/admincomponents/dashboard/cardSecond";
import { CircleArrowUp, CircleArrowDown } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { poppins } from "@/fonts";

const transactions = [
    {
        description: "Spotify Subscription",
        type: "Shopping",
        reference: "#12548796",
        card: "1234 ****",
        date: "28 Jan, 12.30 AM",
        amount: -2500,
        action: "Download"
    },
    {
        description: "Freepik Sales",
        type: "Transfer",
        reference: "#12548796",
        card: "1234 ****",
        date: "25 Jan, 10.40 PM",
        amount: 750,
        action: "Download"
    },
    {
        description: "Mobile Service",
        type: "Service",
        reference: "#12548796",
        card: "1234 ****",
        date: "20 Jan, 10.40 PM",
        amount: -150,
        action: "Download"
    },
    {
        description: "Wilson",
        type: "Transfer",
        reference: "#12548796",
        card: "1234 ****",
        date: "15 Jan, 03.29 PM",
        amount: -1050,
        action: "Download"
    },
    {
        description: "Emilly",
        type: "Transfer",
        reference: "#12548796",
        card: "1234 ****",
        date: "14 Jan, 10.40 PM",
        amount: 840,
        action: "Download"
    }
];

const Transactions = () => {
    return (
        <div className="min-h-screen">
            <div className="grid gap-4 grid-cols-4">
                <CardSecondary />
            </div>

            <div className="my-10 flex flex-col space-y-3">
                <h1 className='text-2xl font-semibold text-[#343C6A] mb-4'>Recent Transactions</h1>
                <div className="flex space-x-6 mx-4">
                    <h1 className="text-green-700 text-lg font-medium hover:border-b-2 hover:border-green-700">All Transactions</h1>
                    <h1 className="text-green-700 text-lg font-medium hover:border-b-2 hover:border-green-700">Income</h1>
                    <h1 className="text-green-700 text-lg font-medium hover:border-b-2 hover:border-green-700">Expenses</h1>
                </div>
                <Table className={cn("bg-white", poppins.className)}>
                    <TableCaption>A list of your recent transactions.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Description</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Card</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.map((transaction, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">
                                {transaction.amount > 0 ? <CircleArrowUp color="#3E9850" className="inline mr-1" /> : <CircleArrowDown color="#3E9850" className="inline mr-1" />}
                                    {transaction.description}</TableCell>
                                <TableCell>{transaction.type}</TableCell>
                                <TableCell>{transaction.card}</TableCell>
                                <TableCell>{transaction.date}</TableCell>
                                <TableCell
                                    className={`${
                                        transaction.amount > 0 ? 'text-blue-600' : 'text-red-600'
                                    }`}
                                >
                                    
                                    {transaction.amount > 0 ? `+N${transaction.amount}` : `-N${Math.abs(transaction.amount)}`}
                                </TableCell>
                                <TableCell className="border py-2 px-3 flex items-center border-[#123288] text-[#123288] justify-center rounded-full">
                                    {transaction.action}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex justify-end">
                    <Image src={'/pagination.png'}  width={200} height={100} alt="pagination"/>
                </div>
            </div>
        </div>
    );
};

export default Transactions;
