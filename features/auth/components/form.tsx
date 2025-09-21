"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.email({ message: "email tidak valid" }),
  password: z.string().min(1, { message: "password tidak boleh kosong" }),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 rounded-[12px] bg-white shadow-2xl lg:px-10 lg:py-10 px-[20px] py-5 w-full"
      >
        <h1 className="mb-5 text-center text-3xl font-bold">Masuk</h1>

        {/* Username */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan Email kamu"
                  {...field}
                  className="rounded-md bg-white p-2 ring-1 ring-gray-400 focus-visible:ring-2 focus-visible:ring-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan passowrd kamu"
                  type="password"
                  {...field}
                  className="rounded-md bg-white p-2 ring-1 ring-gray-400 focus-visible:ring-2 focus-visible:ring-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Button */}
        <Button
          type="submit"
          className="bg-primary mt-5 rounded-md py-5 text-sm text-white hover:opacity-90"
        >
          Masuk Sekarang
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
