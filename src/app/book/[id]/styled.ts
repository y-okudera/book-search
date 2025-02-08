import { styled } from "@mui/material/styles";
import { Typography, Box, Button } from "@mui/material";
import Link from "next/link";

export const BookContainer = styled(Box)`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const Title = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`;

export const Author = styled(Typography)`
  font-size: 18px;
  color: #555;
`;

export const Description = styled(Typography)`
  font-size: 16px;
  margin-top: 10px;
  line-height: 1.5;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  color: #0070f3;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
