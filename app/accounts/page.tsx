import CardSecondary from "@/components/admincomponents/dashboard/cardSecond";
import { Trash2, FilePen, MessageCircleMore } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { poppins } from "@/fonts";

// Replace the transactions array with user data
const users = [
    {
        "Name": "Sierra Ferguson",
        "TotalRides": 132,
        "Gender": "Female",
        "Email": "sierraerguson@gmail.com",
        "Location": "Nigeria",
        "PhoneNumber": "+234959734235"
    },
    {
        "Name": "Sierra Ferguson",
        "TotalRides": 10,
        "Gender": "Female",
        "Email": "sierraerguson@gmail.com",
        "Location": "Anambra, Nigeria",
        "PhoneNumber": "+234908976379"
    },
    {
        "Name": "Sierra Ferguson",
        "TotalRides": 100,
        "Gender": "Female",
        "Email": "sierraerguson@gmail.com",
        "Location": "Ikeji Lagos, Nigeria",
        "PhoneNumber": "+23470486952"
    },
    {
        "Name": "Sierra Ferguson",
        "TotalRides": 7,
        "Gender": "Female",
        "Email": "sierraerguson@gmail.com",
        "Location": "Asaba state, Nigeria",
        "PhoneNumber": "+234809786273"
    },
    {
        "Name": "Sierra Ferguson",
        "TotalRides": 13,
        "Gender": "Female",
        "Email": "sierraerguson@gmail.com",
        "Location": "Awkuzu, Nigeria",
        "PhoneNumber": "+234703685764"
    }
];

const Accounts = () => {
    return (
        <div className="min-h-screen">
            <div className="grid gap-4 grid-cols-4">
                <CardSecondary />
            </div>

            <div className="my-10 flex flex-col space-y-3">
                <div className="flex space-x-6 mx-4">
                    <h1 className="text-green-700 text-lg font-medium hover:border-b-2 hover:border-green-700">All Users</h1>
                    <h1 className="text-green-700 text-lg font-medium hover:border-b-2 hover:border-green-700">Not Active</h1>
                    <h1 className="text-green-700 text-lg font-medium hover:border-b-2 hover:border-green-700">Active</h1>
                </div>
                <Table className={cn("", poppins.className)}>
                    <TableCaption>A list of all users.</TableCaption>
                    <TableHeader className="bg-white">
                        <TableRow>
                        <TableHead></TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Total Rides</TableHead>
                            <TableHead>Gender</TableHead>
                            <TableHead>Email Address</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell className="-mr-10">
                                    <MessageCircleMore/>
                                </TableCell>
                                <TableCell className="flex gap-x-3">
                                    <Image src={'/admin.png'} width={47} height={37} alt={user.Name} className="rounded-full"/>
                                  <div>
                                  <h2 className="text-[#192A3E] font-medium text-sm">     {user.Name}</h2>
                                  <p className="text-[#90A0B7] text-xs">  {user.PhoneNumber}</p>
                                  </div>
                                </TableCell>
                                <TableCell>{user.TotalRides}</TableCell>
                                <TableCell>{user.Gender}</TableCell>
                                <TableCell>{user.Email}</TableCell>
                                <TableCell>{user.Location}</TableCell>
                                <TableCell className="flex items-center gap-x-3 justify-center">
                                    <FilePen color="#3E9850"/>
                                    <Trash2 color="#3E9850"/>
                                </TableCell>
                            </TableRow>
                        ))}
                           <TableFooter className="text-sm text-[#9799A4] font-medium">
                    Total users: 13,460
                    </TableFooter>
                    </TableBody>
                 
                </Table>
                <div className="flex justify-end">
                    <Image src={'/pagination.png'}  width={200} height={100} alt="pagination"/>
                </div>
            </div>
        </div>
    );
};

export default Accounts;
