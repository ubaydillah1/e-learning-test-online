"use client";

import type React from "react";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  UserPlus,
  Mail,
  User,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
} from "lucide-react";

const grades = [
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];

const classes = ["Class A", "Class B", "Class C", "Class D", "Class E"];

export function CreateStudentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    grade: "",
    class: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating student:", formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <UserPlus className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Create Student Account
          </h1>
          <p className="text-muted-foreground">
            Add a new student to the system
          </p>
        </div>
      </div>

      <Card className="hover-lift animate-slide-in-right">
        <CardHeader>
          <CardTitle>Student Information</CardTitle>
          <CardDescription>
            Fill in the details to create a new student account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="flex items-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="student@school.edu"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="dateOfBirth"
                    className="flex items-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Date of Birth
                  </Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange("dateOfBirth", e.target.value)
                    }
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Address
                </Label>
                <Input
                  id="address"
                  placeholder="Enter full address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>
            </div>

            {/* Academic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                Academic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="grade" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Grade Level
                  </Label>
                  <Select
                    onValueChange={(value) => handleInputChange("grade", value)}
                  >
                    <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {grades.map((grade) => (
                        <SelectItem key={grade} value={grade}>
                          {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="class">Class Section</Label>
                  <Select
                    onValueChange={(value) => handleInputChange("class", value)}
                  >
                    <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((cls) => (
                        <SelectItem key={cls} value={cls}>
                          {cls}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                Parent/Guardian Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent/Guardian Name</Label>
                  <Input
                    id="parentName"
                    placeholder="Enter parent name"
                    value={formData.parentName}
                    onChange={(e) =>
                      handleInputChange("parentName", e.target.value)
                    }
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="parentPhone"
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Parent Phone
                  </Label>
                  <Input
                    id="parentPhone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.parentPhone}
                    onChange={(e) =>
                      handleInputChange("parentPhone", e.target.value)
                    }
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="parentEmail"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Parent Email
                </Label>
                <Input
                  id="parentEmail"
                  type="email"
                  placeholder="parent@email.com"
                  value={formData.parentEmail}
                  onChange={(e) =>
                    handleInputChange("parentEmail", e.target.value)
                  }
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 hover:scale-105 transition-transform duration-200"
              >
                Create Student Account
              </Button>
              <Button
                type="button"
                variant="outline"
                className="hover:scale-105 transition-transform duration-200 bg-transparent"
                onClick={() =>
                  setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    address: "",
                    dateOfBirth: "",
                    grade: "",
                    class: "",
                    parentName: "",
                    parentPhone: "",
                    parentEmail: "",
                  })
                }
              >
                Reset Form
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
