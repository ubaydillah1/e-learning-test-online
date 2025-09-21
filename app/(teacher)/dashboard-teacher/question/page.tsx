"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Library } from "lucide-react";
import { QuestionBank } from "@/features/dashboard/components/question-bank";
import { QuestionForm } from "@/features/dashboard/components/question-form";
import { Sidebar } from "@/features/dashboard/components/sidebar";

export default function QuestionsPage() {
  const [activeTab, setActiveTab] = useState("bank");

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 transition-all duration-300">
        <main className="h-full overflow-auto">
          <div className="container mx-auto p-6 pt-20 lg:pt-6">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Question Management
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Create and manage your question collection
                  </p>
                </div>
              </div>

              {/* Tabs */}
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="space-y-6"
              >
                <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
                  <TabsTrigger value="bank" className="gap-2">
                    <Library className="h-4 w-4" />
                    Question Bank
                  </TabsTrigger>
                  <TabsTrigger value="create" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Create Question
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="bank" className="space-y-6">
                  <QuestionBank />
                </TabsContent>

                <TabsContent value="create" className="space-y-6">
                  <QuestionForm />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
