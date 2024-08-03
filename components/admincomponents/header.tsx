"use client"
import { Search, BellDot, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  // Function to format the pathname
  const formatPathname = (path:string) => {
    if (path === '/') return 'Overview';
    return path
      .split('/')
      .filter(Boolean)
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  };

  // Determine the header text
  const headerText = pathname === '/' ? 'Overview' : formatPathname(pathname);

  return (
    <header className="flex items-center justify-between p-4 text-black">
      <h1 className="font-bold text-2xl">{headerText}</h1>
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="Search for something"
            className="bg-gray-100 text-black border-none outline-none px-2 py-1 rounded-full placeholder:px-5 placeholder:text-sm"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex items-center space-x-2">
          <Settings className="bg-gray-100 p-2 rounded-full h-10 w-10 text-green-300" />
          <BellDot className="bg-gray-100 p-2 rounded-full h-10 w-10 text-pink-500" />
        </div>
        <Image
          src="/admin.png"
          height={40}
          width={40}
          alt="Admin"
          className="rounded-full border border-gray-700"
        />
      </div>
    </header>
  );
};
