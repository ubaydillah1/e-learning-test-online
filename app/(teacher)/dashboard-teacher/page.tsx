import { DashboardOverview } from "@/features/dashboard/components/dashboard-overview";
import { Sidebar } from "@/features/dashboard/components/sidebar";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 lg:ml-64 transition-all duration-300">
        <main className="h-full overflow-auto">
          <div className="container mx-auto p-6 pt-20 lg:pt-6">
            <DashboardOverview />
          </div>
        </main>
      </div>
    </div>
  );
}
