import { Box, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BookListContainer = styled(List)`
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
`;

export const BookItem = styled(ListItem)`
  background: white;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: background 0.2s;
  &:hover {
    background: #f7f7f7;
  }
`;

export const BookTitle = styled(Typography)`
  font-weight: bold;
  color: #0070f3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const BookInfo = styled(Typography)`
  font-size: 14px;
  color: #555;
`;
