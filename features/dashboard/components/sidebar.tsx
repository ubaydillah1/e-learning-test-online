"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  FileQuestion,
  BarChart3,
  Settings,
  Users,
  BookOpen,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const sidebarItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
    active: true,
  },
  {
    title: "Manage Questions",
    icon: FileQuestion,
    href: "/questions",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    title: "Students",
    icon: Users,
    href: "/students",
  },
  {
    title: "Subjects",
    icon: BookOpen,
    href: "/subjects",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden animate-fade-in"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden hover:scale-110 transition-transform duration-200"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 z-40 h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
          collapsed ? "w-16" : "w-64",
          mobileOpen
            ? "translate-x-0 animate-slide-in-left"
            : "-translate-x-full lg:translate-x-0",
          className
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
            {!collapsed && (
              <h2 className="text-lg font-semibold text-sidebar-foreground animate-fade-in">
                Teacher Dashboard
              </h2>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex text-sidebar-foreground hover:bg-sidebar-accent hover:scale-110 transition-all duration-200"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 px-3 py-4">
            <nav className="space-y-2">
              {sidebarItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.href}
                    variant={item.active ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 hover:scale-105 animate-fade-in",
                      item.active &&
                        "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm pulse-success",
                      collapsed && "px-2"
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon
                      className={cn(
                        "h-5 w-5 flex-shrink-0 transition-transform duration-200",
                        collapsed && "mx-auto"
                      )}
                    />
                    {!collapsed && (
                      <span className="truncate font-medium">{item.title}</span>
                    )}
                  </Button>
                );
              })}
            </nav>
          </ScrollArea>

          {/* Footer */}
          <div className="border-t border-sidebar-border p-4">
            <div
              className={cn(
                "flex items-center gap-3 animate-fade-in",
                collapsed && "justify-center"
              )}
            >
              <div className="h-8 w-8 rounded-full bg-sidebar-accent flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <span className="text-sm font-medium text-sidebar-accent-foreground">
                  T
                </span>
              </div>
              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-sidebar-foreground truncate">
                    Teacher Name
                  </p>
                  <p className="text-xs text-sidebar-foreground/70 truncate">
                    teacher@school.edu
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
