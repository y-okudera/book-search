import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SearchContainer = styled(Box)`
  display: flex;
  gap: 10px;
  padding: 10px;
`;

export const SearchInputField = styled(TextField)`
  flex: 1;
`;

export const SearchButton = styled(Button)`
  background-color: #0070f3;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;
