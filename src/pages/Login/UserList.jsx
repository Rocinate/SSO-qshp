import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemButton,
  Avatar,
  Typography,
  Box
} from "@mui/material";

const UserList = (props) => {
  const { data, choose } = props;

  return (
    <>
      <Box className="mx-auto border-b border-b-slate-300">
        <Typography gutterBottom variant="h5" align="center">
          选择用户
        </Typography>
        {/* <Typography className="float-right">成电人的聚集地</Typography> */}
      </Box>
      <Box>
        <List sx={{ width: "100%" }}>
          {data.map((user) => (
            <ListItem alignItems="flex-start" key={user}>
              <ListItemButton onClick={() => {choose({uid: user.uid})}}>
                <ListItemAvatar>
                  <Avatar
                    alt="avatar"
                    src={user.avatar}
                  />
                </ListItemAvatar>
                <ListItemText>{user.username}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default UserList;
