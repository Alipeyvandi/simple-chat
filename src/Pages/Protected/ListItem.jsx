import ListItemMui from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import React from "react";

export default React.memo(function ListItem() {
  return (
    <List style={{ backgroundColor: "white" }}>
      <ListItemMui>
        <ListItemAvatar>
          <Avatar sx={{ width: 42, height: 42 }} alt="Profile Picture" />
        </ListItemAvatar>
        <ListItemText
          sx={{
            "& p.MuiTypography-root": {
              whiteSpace: "nowrap",
              maxWidth: "250px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          }}
          primary={"Ali Peyvandi"}
          secondary={
            "hello bia berim kooh kodom kooh hamooon kooohi ke ahooo dare ay balle "
          }
        />
      </ListItemMui>
    </List>
  );
});
