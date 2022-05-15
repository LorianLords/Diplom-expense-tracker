import { Box, styled, Typography } from "@mui/material";

export const Currency = styled(Typography)({
  fontSize: "32px",
  fontWeight: 600,
});

export const CardBigTitle = styled(Typography)({
  fontSize: "32px",
  fontWeight: 600,
});

export const CardMediumTitle = styled(Typography)({
  fontSize: "22px",
  fontWeight: 400,
});

export const CardSmallTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: 400,
});

export const CardCaption = styled(Typography)({
  fontSize: "14px",
  fontWeight: 400,
  color: "#AEAEAE",
});
export const CardCurrencyCaption = styled(Typography)({
  fontSize: "14px",
  color: "#404040",
  fontWeight: 600,
});

export const Flex = styled(Box)({
  display: "flex",
  flexDirection: "column",
});
