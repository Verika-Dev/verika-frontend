"use client";
import React, { useState } from "react";
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
import AdminNav from "@/components/dashboard/header/navbar";
import { useLogout } from "@/hooks/useLogout";
import LogoutModal from "@/components/auth/logout/logoutModal";

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

// const bottomItems = [
//   {
//     id: "support",
//     label: "Support & Comms",
//     icon: HelpCircle,
//     href: "/dashboard/admin/support",
//   },
//   {
//     id: "settings",
//     label: "Settings",
//     icon: Settings,
//     href: "/dashboard/admin/settings",
//   },
// ];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { logout, loading } = useLogout();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

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
          {/* {bottomItems.map(({ id, label, icon: Icon, href }) => {
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
          })} */}

          {/* Logout Button */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button
              onClick={() => setShowLogoutModal(true)}
              disabled={loading}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium
    text-gray-600 hover:bg-gray-50 cursor-pointer transition ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              {loading ? "Logging out..." : "Log Out"}
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
      <LogoutModal
        open={showLogoutModal}
        loading={loading}
        onCancel={() => setShowLogoutModal(false)}
        onConfirm={() => {
          logout();
          setShowLogoutModal(false);
        }}
      />
    </div>
  );
}
