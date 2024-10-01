import { Stack, Typography } from "@mui/material";
//import { LoremIpsum } from "react-lorem-ipsum";
//const html = LoremIpsum()
//const htmlToString = html.toString()

//const innerHTML = htmlToString.replace(/<[^>]+>/g, '')

function HomePageContent({ number }) {
  return (
    <Stack sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography sx={{ textAlign: "center" }} variant={"h3"}>
        Title {number + 1}
      </Typography>
      <Typography variant={"h6"}>Subtitle 1</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
        ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
        tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
        Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
        massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
        vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
        inceptos himenaeos.
      </Typography>
      <Typography variant={"h6"}>Subtitle 2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
        ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
        tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
        Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
        massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
        vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
        inceptos himenaeos
      </Typography>
    </Stack>
  );
}

export default HomePageContent;
