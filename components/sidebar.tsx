"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/free-counter";

const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-500"
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-orange-700",
    href: '/video',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: "text-emerald-500",
    href: '/music',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-green-700",
    href: '/code',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className="h-full bg-gradient-to-b from-[#192339] to-[#111827] text-white">
      <div className="py-4 px-5 space-y-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="relative h-10 w-10">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className="text-2xl font-extrabold">TextToAnything</h1>
        </Link>
        <div className="space-y-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center p-3 rounded-md transition duration-300 ease-in-out hover:bg-sky-400 hover:bg-opacity-25",
                pathname === route.href ? "bg-sky-400 bg-opacity-25" : "",
              )}
            >
              <div className="flex items-center space-x-2">
                <route.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{route.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
};
