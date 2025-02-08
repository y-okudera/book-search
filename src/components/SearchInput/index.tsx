"use client";

import { useState } from "react";
import { SearchButton, SearchContainer, SearchInputField } from "./styled";

type Props = {
  onSearch: (query: string) => void;
};

export const SearchInput = ({ onSearch }: Props) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) onSearch(input.trim());
  };

  return (
    <SearchContainer>
      <SearchInputField
        variant="outlined"
        placeholder="書籍タイトルを入力"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <SearchButton variant="contained" onClick={handleSearch}>
        検索
      </SearchButton>
    </SearchContainer>
  );
};
