"use client";

import {
  BookContainer,
  Title,
  Author,
  Description,
  BackButton,
} from "../styled";

type Props = {
  book: {
    title: string;
    authors: string;
    description: string;
    publishDate: string;
  };
};

export default function BookDetail({ book }: Props) {
  return (
    <BookContainer>
      <Title>{book.title}</Title>
      <Author>著者: {book.authors}</Author>
      <Description>{book.description}</Description>
      <p>出版日: {book.publishDate}</p>
      <BackButton href="/">🔙 検索に戻る</BackButton>
    </BookContainer>
  );
}
