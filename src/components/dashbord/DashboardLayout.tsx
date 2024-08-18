import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";
const DashboardLayout = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <div>
      return <p>Hello {data.user.email}</p>
    </div>
  );
};

export default DashboardLayout;
