import { Book } from "@/types/Book";

export const fetchBooks = async (
  query: string,
  page: number,
  limit: number
): Promise<Book[]> => {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(
        query
      )}&page=${page}&limit=${limit}`
    );
    if (!response.ok) throw new Error("書籍情報の取得に失敗しました。");

    const data = await response.json();
    return data.docs.map(
      (book: any): Book => ({
        id: book.key.replace("works/", ""),
        title: book.title,
        author: book.author_name?.[0] || "不明",
        year: book.first_publish_year || "不明",
      })
    );
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchBookDetails = async (id: string) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3秒の遅延を追加
    const response = await fetch(`https://openlibrary.org/works/${id}.json`);
    if (!response.ok) throw new Error("書籍情報の取得に失敗しました。");

    const data = await response.json();
    return {
      id: data.key,
      title: data.title,
      description: data.description?.value || "説明なし",
      authors: data.authors?.map((a: any) => a.name).join(", ") || "不明",
      publishDate: data.created?.value || "不明",
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
