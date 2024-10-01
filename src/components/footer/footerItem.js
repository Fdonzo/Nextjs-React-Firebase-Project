import { Typography, Box } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { setIsInformationPage } from "../../stores/infoPageState";

function FooterSubtitleItem({ label, icon }) {
  const isInformationPage = useSelector(
    ({ infoPageState }) => infoPageState.isInformationPage
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    if (!isInformationPage) {
      dispatch(setIsInformationPage());
      router.push("/information-policies");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        mb: 4,
      }}
    >
      {icon}
      <Typography
        sx={{
          ":hover": { borderBottom: "2px solid " },
          px: 1.5,
          color: "white",
          mt: 1,
          bgcolor: {
            ...(isInformationPage && lightBlue["A700"]),
          },
          fontSize: { xs: 12, sm: 12, md: 14, lg: 16 },
          fontWeight: { xs: 300, sm: 300, lg: 350 },
          lineHeight: { sm: 1, md: 1.3, lg: 1.5 },
        }}
        variant="body1"
        onClick={handleClick}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default FooterSubtitleItem;
