import DashboardLayout from "@/components/dashbord/DashboardLayout";
import UserProfile from "@/components/dashbord/UserProfile";
import React from "react";

const page = () => {
  return (
    <div>
      <UserProfile />
      <DashboardLayout />
    </div>
  );
};

export default page;
