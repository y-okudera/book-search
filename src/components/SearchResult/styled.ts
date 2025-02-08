import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

export const CenteredText = styled(Typography)`
  text-align: center;
  margin-top: 16px;
`;

export const ErrorText = styled(Typography)`
  color: red;
  text-align: center;
  margin-top: 16px;
`;

export const Container = styled(Box)`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
