"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", nilai: 75 },
  { name: "Feb", nilai: 80 },
  { name: "Mar", nilai: 70 },
  { name: "Apr", nilai: 85 },
  { name: "Mei", nilai: 90 },
];

export function Chart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="nilai"
          stroke="#3b82f6"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
