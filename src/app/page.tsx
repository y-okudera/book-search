"use client";

import { useState } from "react";
import { useSearchBooks } from "@/hooks/useSearchBooks";
import { SearchInput } from "@/components/SearchInput";
import { BookList } from "@/components/BookList";
import { CenteredText, ErrorText } from "@/components/SearchResult/styled";
import { PageContainer } from "@/components/Common/styled";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const { books, loading, error } = useSearchBooks(query);

  return (
    <PageContainer>
      <h1>📚 書籍検索</h1>
      <SearchInput onSearch={setQuery} />

      {query && (
        <>
          {loading && <CenteredText variant="body1">🔄 検索中...</CenteredText>}
          {!loading && error && <ErrorText variant="body1">{error}</ErrorText>}
          {!loading && books.length > 0 && <BookList books={books} />}
        </>
      )}
    </PageContainer>
  );
}
