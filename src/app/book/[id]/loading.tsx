import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box
      flexDirection="column"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f4f4f4"
    >
      <CircularProgress size={60} thickness={4} color="primary" />
      <Typography variant="body1" sx={{ mt: 2, color: "gray" }}>
        データを読み込んでいます...
      </Typography>
    </Box>
  );
}
