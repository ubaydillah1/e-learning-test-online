"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const data = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  name: `Siswa ${i + 1}`,
  nilai: Math.floor(Math.random() * 100),
}));

export function StudentTable() {
  const [page, setPage] = useState(1);
  const perPage = 10;
  const totalPages = Math.ceil(data.length / perPage);

  const [search, setSearch] = useState("");
  const filtered = data.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-4">
      <Input
        placeholder="Cari siswa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Nama</th>
            <th className="p-2 text-left">Nilai</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((siswa) => (
            <tr key={siswa.id} className="border-t">
              <td className="p-2">{siswa.name}</td>
              <td className="p-2">{siswa.nilai}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-2">
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <span className="px-2 py-1">
          Hal {page} / {totalPages}
        </span>
        <Button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
