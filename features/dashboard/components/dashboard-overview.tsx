"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  FileQuestion,
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
} from "lucide-react";

const stats = [
  {
    title: "Total Students",
    value: "248",
    change: "+12%",
    changeType: "positive" as const,
    icon: Users,
    description: "Active students this semester",
  },
  {
    title: "Questions Created",
    value: "1,247",
    change: "+23%",
    changeType: "positive" as const,
    icon: FileQuestion,
    description: "Questions in question bank",
  },
  {
    title: "Quizzes Completed",
    value: "89",
    change: "+8%",
    changeType: "positive" as const,
    icon: CheckCircle,
    description: "Completed this month",
  },
  {
    title: "Average Score",
    value: "78.5%",
    change: "-2.1%",
    changeType: "negative" as const,
    icon: BarChart3,
    description: "Class average performance",
  },
];

const recentQuizzes = [
  {
    id: 1,
    title: "Mathematics - Algebra Basics",
    subject: "Mathematics",
    students: 45,
    completed: 38,
    avgScore: 82,
    status: "active",
    dueDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Physics - Newton's Laws",
    subject: "Physics",
    students: 32,
    completed: 32,
    avgScore: 76,
    status: "completed",
    dueDate: "2024-01-10",
  },
  {
    id: 3,
    title: "Chemistry - Periodic Table",
    subject: "Chemistry",
    students: 28,
    completed: 15,
    avgScore: 68,
    status: "active",
    dueDate: "2024-01-20",
  },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, Teacher!
          </h1>
          <p className="text-muted-foreground mt-1">
            whats happening with your classes today.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create New Quiz
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.title}
              className="hover-lift animate-fade-in transition-all duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Badge
                    variant={
                      stat.changeType === "positive" ? "default" : "destructive"
                    }
                    className="text-xs animate-scale-in"
                  >
                    {stat.changeType === "positive" ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <AlertCircle className="h-3 w-3 mr-1" />
                    )}
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Quizzes */}
      <Card className="animate-slide-in-right">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Recent Quizzes
          </CardTitle>
          <CardDescription>
            Monitor your active and recently completed quizzes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentQuizzes.map((quiz, index) => (
              <div
                key={quiz.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 hover-lift transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-foreground">
                      {quiz.title}
                    </h3>
                    <Badge
                      variant={
                        quiz.status === "active" ? "default" : "secondary"
                      }
                      className="animate-scale-in"
                    >
                      {quiz.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{quiz.subject}</span>
                    <span>•</span>
                    <span>
                      {quiz.completed}/{quiz.students} completed
                    </span>
                    <span>•</span>
                    <span>Avg: {quiz.avgScore}%</span>
                    <span>•</span>
                    <span>Due: {quiz.dueDate}</span>
                  </div>
                  <div className="mt-2">
                    <Progress
                      value={(quiz.completed / quiz.students) * 100}
                      className="h-2 transition-all duration-500"
                    />
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:scale-105 transition-transform duration-200 bg-transparent"
                >
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
