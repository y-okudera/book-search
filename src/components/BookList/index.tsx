"use client";

import { Book } from "@/types/Book";
import Link from "next/link";
import { BookInfo, BookItem, BookListContainer, BookTitle } from "./styled";

type Props = {
  books: Book[];
};

export const BookList = ({ books }: Props) => {
  if (books.length === 0) return <p>検索結果がありません。</p>;

  return (
    <BookListContainer>
      {books.map((book) => (
        <BookItem key={book.id}>
          <Link href={`/book/${book.id}`} passHref>
            <BookTitle variant="h6">{book.title}</BookTitle>
          </Link>
          <BookInfo variant="body2">
            {book.author}（{book.year}）
          </BookInfo>
        </BookItem>
      ))}
    </BookListContainer>
  );
};
