"use client";
import React from "react";
import {
  LayoutDashboard,
  Award,
  Building2,
  BookOpen,
  Users,
  Wallet,
  MessageSquare,
  BarChart3,
  HelpCircle,
  Settings,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminNav from "@/components/dashboard/admin/navbar";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard/student",
  },
  {
    id: "course-library",
    label: "Course Library",
    icon: Award,
    href: "/dashboard/student/course-library",
  },
  {
    id: "live-sessions",
    label: "Live session",
    icon: Building2,
    href: "/dashboard/student/live-sessions",
  },
  {
    id: "assignments",
    label: "Assignments",
    icon: BookOpen,
    href: "/dashboard/student/assignments",
  },
  {
    id: "community",
    label: "Community",
    icon: Users,
    href: "/dashboard/student/community",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: Wallet,
    href: "/dashboard/student/analytics",
  },
  {
    id: "practice-tests",
    label: "Practice Tests",
    icon: MessageSquare,
    href: "/dashboard/student/practice-tests",
  },
  {
    id: "subscription",
    label: "Subscriptions",
    icon: BarChart3,
    href: "/dashboard/student/subscription",
  },
];

const bottomItems = [
  {
    id: "support",
    label: "Support & Comms",
    icon: HelpCircle,
    href: "/dashboard/admin/support",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/dashboard/admin/settings",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-1">
            {menuItems.map(({ id, label, icon: Icon, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={id}
                  href={href}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition ${
                    isActive
                      ? "bg-[#1E40AF] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}>
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Items */}
        <div className="p-4 space-y-1">
          {bottomItems.map(({ id, label, icon: Icon, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={id}
                href={href}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition ${
                  isActive
                    ? "bg-[#1E40AF] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}>
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            );
          })}

          {/* Profile Footer */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-md">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                <Image
                  src="/icons/admin.png"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-800">Alison Eyo</p>
                <p className="text-xs text-gray-500">Super admin</p>
              </div>
              <ChevronRight
                size={20}
                className="text-gray-400 cursor-pointer "
              />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Navbar */}
        <div className="sticky top-0 z-50">
          <AdminNav />
        </div>

        {/* Scrollable Children */}
        <div className="flex-1 overflow-y-auto p-8 bg-gray-50">{children}</div>
      </main>
    </div>
  );
}
