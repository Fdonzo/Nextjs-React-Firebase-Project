import { SvgIcon } from "@mui/material";

export default function SocialMeddiaFollowUs({ icon, customkey, style }) {
  return (
    <SvgIcon sx={{ ...style, ":hover": { color: "white" } }} key={customkey}>
      {icon}
    </SvgIcon>
  );
}
