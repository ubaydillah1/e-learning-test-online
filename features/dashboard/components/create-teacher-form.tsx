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
import { Textarea } from "@/components/ui/textarea";
import {
  GraduationCap,
  Mail,
  User,
  Phone,
  MapPin,
  BookOpen,
} from "lucide-react";

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
  "Geography",
  "Computer Science",
  "Art",
  "Music",
];

export function CreateTeacherForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    subjects: "",
    bio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating teacher:", formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <GraduationCap className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Create Teacher Account
          </h1>
          <p className="text-muted-foreground">
            Add a new teacher to the system
          </p>
        </div>
      </div>

      <Card className="hover-lift animate-slide-in-right">
        <CardHeader>
          <CardTitle>Teacher Information</CardTitle>
          <CardDescription>
            Fill in the details to create a new teacher account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="flex items-center gap-2">
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

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="teacher@school.edu"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>
            </div>

            {/* Address */}
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

            {/* Subject Specialization */}
            <div className="space-y-2">
              <Label htmlFor="subjects" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Subject Specialization
              </Label>
              <Select
                onValueChange={(value) => handleInputChange("subjects", value)}
              >
                <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                  <SelectValue placeholder="Select primary subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label htmlFor="bio">Bio (Optional)</Label>
              <Textarea
                id="bio"
                placeholder="Brief description about the teacher..."
                value={formData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                className="min-h-[100px] transition-all duration-200 focus:scale-[1.02]"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 hover:scale-105 transition-transform duration-200"
              >
                Create Teacher Account
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
                    subjects: "",
                    bio: "",
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
