"use client";
import { useState } from "react";
import Form from "@/components/settingscomponents/form";
import Security from "@/components/settingscomponents/security";

const SettingsPage = () => {
    const [show, setShow] = useState("profile");
return (
        <div className="bg-white h-[600px] w-[90%] mx-auto">
            <div className="flex gap-x-20 mx-4 py-4 border-b border-gray-200">
                <h1
                    className={`text-green-700 text-lg font-medium cursor-pointer 
                    ${show === "profile" ? "border-b-2 border-green-700" : ""}`}
                    onClick={() => setShow("profile")}
                >
                    Edit Profile
                </h1>
                <h1
                    className={`text-green-700 text-lg font-medium cursor-pointer 
                    ${show === "edit" ? "border-b-2 border-green-700" : ""}`}
                    onClick={() => setShow("edit")}
                >
                    Security
                </h1>
            </div>
            <div className="px-4 py-6">
                {show === "profile" ? <Form /> : <Security />}
            </div>
        </div>
    );
}

export default SettingsPage;
