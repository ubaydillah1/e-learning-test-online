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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Save, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnswerOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface QuestionFormData {
  question: string;
  questionType: "MultipleChoice" | "MultipleAnswer" | "TrueFalse";
  subject: string;
  difficulty: "Easy" | "Medium" | "Hard";
  answers: AnswerOption[];
}

export function QuestionForm() {
  const [formData, setFormData] = useState<QuestionFormData>({
    question: "",
    questionType: "MultipleChoice",
    subject: "",
    difficulty: "Medium",
    answers: [
      { id: "1", text: "", isCorrect: false },
      { id: "2", text: "", isCorrect: false },
      { id: "3", text: "", isCorrect: false },
      { id: "4", text: "", isCorrect: false },
    ],
  });

  const [previewMode, setPreviewMode] = useState(false);

  const addAnswer = () => {
    const newAnswer: AnswerOption = {
      id: Date.now().toString(),
      text: "",
      isCorrect: false,
    };
    setFormData((prev) => ({
      ...prev,
      answers: [...prev.answers, newAnswer],
    }));
  };

  const removeAnswer = (id: string) => {
    if (formData.answers.length <= 2) return;
    setFormData((prev) => ({
      ...prev,
      answers: prev.answers.filter((answer) => answer.id !== id),
    }));
  };

  const updateAnswer = (
    id: string,
    field: keyof AnswerOption,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      answers: prev.answers.map((answer) =>
        answer.id === id ? { ...answer, [field]: value } : answer
      ),
    }));
  };

  const setCorrectAnswer = (id: string) => {
    if (formData.questionType === "MultipleChoice") {
      setFormData((prev) => ({
        ...prev,
        answers: prev.answers.map((answer) => ({
          ...answer,
          isCorrect: answer.id === id,
        })),
      }));
    } else {
      updateAnswer(
        id,
        "isCorrect",
        !formData.answers.find((a) => a.id === id)?.isCorrect
      );
    }
  };

  const handleSave = () => {
    console.log("Saving question:", formData);
    // Here you would typically save to your database
  };

  if (previewMode) {
    return (
      <Card className="animate-scale-in">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Question Preview</CardTitle>
            <Button
              variant="outline"
              onClick={() => setPreviewMode(false)}
              className="hover:scale-105 transition-transform duration-200"
            >
              Edit Question
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-4 animate-fade-in">
              <Badge variant="secondary" className="animate-bounce-in">
                {formData.subject}
              </Badge>
              <Badge
                variant="outline"
                className="animate-bounce-in"
                style={{ animationDelay: "0.1s" }}
              >
                {formData.difficulty}
              </Badge>
              <Badge
                className="animate-bounce-in"
                style={{ animationDelay: "0.2s" }}
              >
                {formData.questionType}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold mb-4 animate-fade-in">
              {formData.question}
            </h3>
            <div className="space-y-3">
              {formData.answers.map((answer, index) => (
                <div
                  key={answer.id}
                  className={cn(
                    "p-3 border rounded-lg cursor-pointer transition-all duration-200 hover-lift animate-fade-in",
                    answer.isCorrect
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:bg-muted/50"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span>{answer.text}</span>
                    {answer.isCorrect && (
                      <Badge
                        variant="default"
                        className="ml-auto animate-scale-in"
                      >
                        Correct
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Create New Question
        </CardTitle>
        <CardDescription>
          Build multiple choice questions for your quizzes
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Question Details */}
        <div className="grid gap-4 md:grid-cols-2 animate-slide-in-left">
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Select
              value={formData.subject}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, subject: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
                <SelectItem value="Biology">Biology</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="History">History</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="difficulty">Difficulty</Label>
            <Select
              value={formData.difficulty}
              onValueChange={(value: "Easy" | "Medium" | "Hard") =>
                setFormData((prev) => ({ ...prev, difficulty: value }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Question Type */}
        <div className="space-y-2 animate-slide-in-right">
          <Label htmlFor="questionType">Question Type</Label>
          <Select
            value={formData.questionType}
            onValueChange={(
              value: "MultipleChoice" | "MultipleAnswer" | "TrueFalse"
            ) => setFormData((prev) => ({ ...prev, questionType: value }))}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MultipleChoice">
                Multiple Choice (Single Answer)
              </SelectItem>
              <SelectItem value="MultipleAnswer">Multiple Answer</SelectItem>
              <SelectItem value="TrueFalse">True/False</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Question Text */}
        <div className="space-y-2 animate-fade-in">
          <Label htmlFor="question">Question</Label>
          <Textarea
            id="question"
            placeholder="Enter your question here..."
            value={formData.question}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, question: e.target.value }))
            }
            className="min-h-[100px]"
          />
        </div>

        {/* Answer Options */}
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <Label>Answer Options</Label>
            <Button
              variant="outline"
              size="sm"
              onClick={addAnswer}
              className="gap-2 hover:scale-105 transition-transform duration-200 bg-transparent"
            >
              <Plus className="h-4 w-4" />
              Add Option
            </Button>
          </div>

          <div className="space-y-3">
            {formData.answers.map((answer, index) => (
              <div
                key={answer.id}
                className="flex items-center gap-3 p-3 border border-border rounded-lg hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-medium text-muted-foreground min-w-[24px]">
                  {String.fromCharCode(65 + index)}.
                </span>
                <Input
                  placeholder={`Option ${String.fromCharCode(65 + index)}`}
                  value={answer.text}
                  onChange={(e) =>
                    updateAnswer(answer.id, "text", e.target.value)
                  }
                  className="flex-1 transition-all duration-200 focus:scale-[1.02]"
                />
                <Button
                  variant={answer.isCorrect ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCorrectAnswer(answer.id)}
                  className="min-w-[80px] hover:scale-105 transition-transform duration-200"
                >
                  {answer.isCorrect ? "Correct" : "Mark"}
                </Button>
                {formData.answers.length > 2 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeAnswer(answer.id)}
                    className="text-destructive hover:text-destructive hover:scale-110 transition-all duration-200"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            {formData.questionType === "MultipleChoice"
              ? "Click 'Mark' to set the correct answer. Only one answer can be correct."
              : "Click 'Mark' to toggle correct answers. Multiple answers can be correct."}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-border animate-fade-in">
          <Button
            onClick={handleSave}
            className="gap-2 hover:scale-105 transition-transform duration-200"
          >
            <Save className="h-4 w-4" />
            Save Question
          </Button>
          <Button
            variant="outline"
            onClick={() => setPreviewMode(true)}
            className="gap-2 hover:scale-105 transition-transform duration-200"
          >
            <Eye className="h-4 w-4" />
            Preview
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
