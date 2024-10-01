import { List, ListItem, ListItemText, Typography } from "@mui/material";

export default function FooterItemSubheading({ eachItem }) {
  return (
    <List dense={true}>
      {eachItem.map((eachTest, index) => {
        return (
          <ListItem key={index}>
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  sx={{
                    //bgcolor: grey["800"],
                    color: "black",
                    fontSize: { xs: 12, sm: 12, md: 14, lg: 16 },
                    fontWeight: { xs: 300, sm: 300, lg: 350 },
                    lineHeight: { sm: 1, md: 1.3, lg: 1.5 },
                    ":hover": {
                      color: "white",
                    },
                  }}
                >
                  {eachTest}
                </Typography>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
}
