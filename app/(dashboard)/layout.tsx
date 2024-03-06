import DashboardNavbar from "@/components/DashboardNavbar";
import { Sidebar } from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/apiLimit";
import { checkSubscription } from "@/lib/subscription";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="relative h-full">
      <div className="hidden h-full bg-black md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="pb-10 md:pl-72">
        <DashboardNavbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
