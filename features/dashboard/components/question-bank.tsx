"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Edit, Trash2, Copy, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface Question {
  id: string;
  question: string;
  subject: string;
  difficulty: "Easy" | "Medium" | "Hard";
  questionType: "MultipleChoice" | "MultipleAnswer" | "TrueFalse";
  answers: Array<{ text: string; isCorrect: boolean }>;
  createdAt: string;
  usageCount: number;
}

const mockQuestions: Question[] = [
  {
    id: "1",
    question: "What is the derivative of x²?",
    subject: "Mathematics",
    difficulty: "Medium",
    questionType: "MultipleChoice",
    answers: [
      { text: "2x", isCorrect: true },
      { text: "x²", isCorrect: false },
      { text: "2x²", isCorrect: false },
      { text: "x", isCorrect: false },
    ],
    createdAt: "2024-01-10",
    usageCount: 15,
  },
  {
    id: "2",
    question:
      "Which of the following are Newton's laws of motion? (Select all that apply)",
    subject: "Physics",
    difficulty: "Hard",
    questionType: "MultipleAnswer",
    answers: [
      { text: "An object at rest stays at rest", isCorrect: true },
      { text: "F = ma", isCorrect: true },
      { text: "E = mc²", isCorrect: false },
      {
        text: "For every action, there is an equal and opposite reaction",
        isCorrect: true,
      },
    ],
    createdAt: "2024-01-08",
    usageCount: 8,
  },
  {
    id: "3",
    question: "Water boils at 100°C at sea level.",
    subject: "Chemistry",
    difficulty: "Easy",
    questionType: "TrueFalse",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    createdAt: "2024-01-12",
    usageCount: 22,
  },
];

export function QuestionBank() {
  const [questions] = useState<Question[]>(mockQuestions);
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  const filteredQuestions = questions.filter((question) => {
    const matchesSearch =
      question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject =
      subjectFilter === "all" || question.subject === subjectFilter;
    const matchesDifficulty =
      difficultyFilter === "all" || question.difficulty === difficultyFilter;

    return matchesSearch && matchesSubject && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 border-green-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Hard":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  if (selectedQuestion) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Question Details</CardTitle>
            <Button variant="outline" onClick={() => setSelectedQuestion(null)}>
              Back to List
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{selectedQuestion.subject}</Badge>
            <Badge className={getDifficultyColor(selectedQuestion.difficulty)}>
              {selectedQuestion.difficulty}
            </Badge>
            <Badge variant="outline">{selectedQuestion.questionType}</Badge>
            <Badge variant="outline">{selectedQuestion.usageCount} uses</Badge>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {selectedQuestion.question}
            </h3>
            <div className="space-y-3">
              {selectedQuestion.answers.map((answer, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-3 border rounded-lg",
                    answer.isCorrect
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium">
                      {selectedQuestion.questionType === "TrueFalse"
                        ? answer.text
                        : `${String.fromCharCode(65 + index)}. ${answer.text}`}
                    </span>
                    {answer.isCorrect && (
                      <Badge variant="default" className="ml-auto">
                        Correct
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <Button className="gap-2">
              <Edit className="h-4 w-4" />
              Edit Question
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Copy className="h-4 w-4" />
              Duplicate
            </Button>
            <Button variant="destructive" className="gap-2">
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">Question Bank</CardTitle>
        <CardDescription>
          Manage and organize your question collection
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={subjectFilter} onValueChange={setSubjectFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="All Subjects" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              <SelectItem value="Mathematics">Mathematics</SelectItem>
              <SelectItem value="Physics">Physics</SelectItem>
              <SelectItem value="Chemistry">Chemistry</SelectItem>
              <SelectItem value="Biology">Biology</SelectItem>
            </SelectContent>
          </Select>

          <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="All Difficulties" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Difficulties</SelectItem>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((question) => (
            <div
              key={question.id}
              className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{question.subject}</Badge>
                    <Badge className={getDifficultyColor(question.difficulty)}>
                      {question.difficulty}
                    </Badge>
                    <Badge variant="outline">{question.questionType}</Badge>
                  </div>

                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {question.question}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Created: {question.createdAt}</span>
                    <span>•</span>
                    <span>Used {question.usageCount} times</span>
                    <span>•</span>
                    <span>{question.answers.length} options</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedQuestion(question)}
                    className="gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-transparent"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              No questions found matching your criteria.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
