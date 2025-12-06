"use client";

import React from "react";
import {
  LayoutDashboard,
  Award,
  Building2,
  Users,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminNav from "@/components/dashboard/header/navbar";
import { useLogout } from "@/hooks/useLogout";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard/tutor",
  },
  {
    id: "live-session",
    label: "Live session",
    icon: Award,
    href: "/dashboard/tutor/live-session",
  },
  {
    id: "schedules",
    label: "Schedules",
    icon: Building2,
    href: "/dashboard/tutor/schedule",
  },
  {
    id: "mentorship-request",
    label: "Mentorship Request",
    icon: Users,
    href: "/dashboard/tutor/mentorship-request",
  },
];

const bottomItems = [
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/dashboard/tutor/settings",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { logout, loading } = useLogout();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        {/* Top Menu */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-2">
            <motion.div layout>
              {menuItems.map(({ id, label, icon: Icon, href }) => {
                const isActive = pathname === href;

                return (
                  <motion.div key={id} layout>
                    <Link href={href}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm cursor-pointer overflow-hidden ${
                          isActive
                            ? "text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}>
                        {isActive && (
                          <motion.div
                            layoutId="activeHighlight"
                            className="absolute inset-0 bg-[#1E40AF] rounded-md z-0"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 25,
                            }}
                          />
                        )}

                        <Icon size={18} className="z-10" />
                        <span className="z-10">{label}</span>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Bottom Settings + Logout */}
        <div className="p-4 space-y-2">
          {bottomItems.map(({ id, label, icon: Icon, href }) => {
            const isActive = pathname === href;

            return (
              <motion.div key={id} layout>
                <Link href={href}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm cursor-pointer overflow-hidden ${
                      isActive
                        ? "text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}>
                    {isActive && (
                      <motion.div
                        layoutId="activeHighlight"
                        className="absolute inset-0 bg-[#1E40AF] rounded-md z-0"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />
                    )}

                    <Icon size={18} className="z-10" />
                    <span className="z-10">{label}</span>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}

          {/* Logout Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={logout}
            disabled={loading}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition cursor-pointer">
            <span className="font-medium">
              {loading ? "Logging out..." : "Logout"}
            </span>
          </motion.button>
        </div>
      </motion.aside>

      {/* Main Section */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="sticky top-0 z-50">
          <AdminNav />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="flex-1 overflow-y-auto p-8 bg-gray-50">
          {children}
        </motion.div>
      </main>
    </div>
  );
}
