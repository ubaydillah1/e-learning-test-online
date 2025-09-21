"use client";
import React, { useState } from "react";
import { Flag, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExamPage() {
  const [flagged, setFlagged] = useState(false);
  const [current, setCurrent] = useState(0);

  const questions = [
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
    {
      q: "Mana yang bukan bahasa pemrograman?",
      opts: ["Python", "JavaScript", "HTML", "C++"],
    },
    {
      q: "Framework mana yang berbasis React?",
      opts: ["Django", "Next.js", "Laravel", "Spring"],
    },
  ];

  return (
    <main className="min-h-screen bg-background flex-col flex items-center py-10 relative px-[20px] sm:px-[40px]">
      <div className="max-w-6xl my-3 text-end w-full">
        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
          Try Out 1
        </span>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6 flex flex-col gap-6 relative overflow-hidden h-fit">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-2">
                  Pertanyaan {current + 1} dari {questions.length}
                </h2>
                <p className="text-slate-700">{questions[current].q}</p>
              </div>

              <div className="flex flex-col gap-3">
                {questions[current].opts.map((opt, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-slate-50"
                  >
                    <input
                      type="radio"
                      name={`answer-${current}`}
                      className="accent-primary"
                    />
                    <span className="text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center pt-4 border-t">
            <button
              onClick={() => setFlagged(!flagged)}
              className={`flex items-center gap-2 transition-colors ${
                flagged
                  ? "text-yellow-600"
                  : "text-slate-600 hover:text-primary"
              }`}
            >
              <Flag className="w-4 h-4" />
              <p className="hidden sm:block">
                {flagged ? "Ditandai" : "Tandai"}
              </p>
            </button>
            <div className="flex gap-3">
              <button
                disabled={current === 0}
                onClick={() => setCurrent((c) => c - 1)}
                className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 disabled:opacity-50"
              >
                Sebelumnya
              </button>
              <button
                disabled={current === questions.length - 1}
                onClick={() => setCurrent((c) => c + 1)}
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
              >
                Berikutnya
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <h3 className="font-semibold text-slate-800">Soal</h3>
          <div className="grid grid-cols-6 gap-3">
            {Array.from({ length: questions.length }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium
                  ${
                    i === current
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="mt-4 text-sm text-slate-600 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-primary inline-block" /> Saat
              ini
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-yellow-100 border border-yellow-400 inline-block" />{" "}
              Ditandai
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-slate-200 inline-block" />{" "}
              Belum Dijawab
            </div>
          </div>

          <button className="mt-6 w-full py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Kumpulkan Ujian
          </button>
        </div>
      </div>
    </main>
  );
}
