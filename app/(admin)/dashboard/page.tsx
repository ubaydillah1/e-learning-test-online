"use client";

import { useState } from "react";
import { AdminSidebar } from "@/features/dashboard/components/admin-sidebar";
import { CreateTeacherForm } from "@/features/dashboard/components/create-teacher-form";
import { CreateStudentForm } from "@/features/dashboard/components/create-student-form";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("teacher");

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <div className="lg:ml-64 transition-all duration-300">
        <div className="p-6 lg:p-8">
          {activeTab === "teacher" && <CreateTeacherForm />}
          {activeTab === "student" && <CreateStudentForm />}
        </div>
      </div>
    </div>
  );
}
