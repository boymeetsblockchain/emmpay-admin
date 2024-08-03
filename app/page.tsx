import { Cards } from "@/components/admincomponents/dashboard/cards";
import Form from "@/components/admincomponents/form";
import Image from "next/image";
const AdminPage = () => {
  return (  
    <div className="min-h-screen">
     <Cards/>
     <div className="flex justify-between items-center relative">
       <Image src={'/bar.png'} alt="bar chart" width={730} height={360} className="mt-10"/>
      <div className="absolute -top-10 right-0 w-1/3">
     <Form/>
     </div>
     </div>
     <div>
      <Image src={'/flow.png'} width={1086} height={323} alt="flow"/>
     </div>
    </div>
  );
}
 
export default AdminPage;
