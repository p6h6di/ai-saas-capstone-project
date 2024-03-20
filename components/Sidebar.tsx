"use client";

import Link from "next/link";
import { Dancing_Script as DancingScript } from "next/font/google";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  VideoIcon,
  CreditCardIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import FreeCounter from "./FreeCounter";

const poppins = DancingScript({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
  },

  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
  },

  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
  },

  {
    label: "Billing",
    icon: CreditCardIcon,
    href: "/billing",
  },
];

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col space-y-4 bg-black py-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="mb-14 flex items-center pl-3">
          <h1 className={cn("text-4xl font-bold", poppins.className)}>
            Spark Mind
          </h1>
        </Link>
        <div className="space-y-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-gray-500/30 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-gray-500/30"
                  : "text-zinc-400"
              )}
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
    </div>
  );
};
