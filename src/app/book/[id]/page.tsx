import { fetchBookDetails } from "@/services/openLibrary";
import BookDetail from "./components/BookDetail";

type Props = {
  params: { id: string };
};

export default async function BookDetailPage({ params }: Props) {
  const awaitedParams = await Promise.resolve(params);
  const book = await fetchBookDetails(awaitedParams.id);

  if (!book) {
    return <p>📕 書籍情報が見つかりませんでした。</p>;
  }

  return <BookDetail book={book} />;
}
