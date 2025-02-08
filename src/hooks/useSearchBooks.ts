"use client";

import { fetchBooks } from "@/services/openLibrary";
import { Book } from "@/types/Book";
import { useEffect, useState } from "react";

export const useSearchBooks = (query: string) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError("");

      const result = await fetchBooks(query, 1, 20);
      if (result.length === 0) setError("書籍が見つかりませんでした。");

      setBooks(result);
      setLoading(false);
    };

    fetchData();
  }, [query]);

  return { books, loading, error };
};
