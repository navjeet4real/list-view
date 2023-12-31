import React, { useEffect, useState } from "react";
import { Typography, Stack, Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/app";
import UserList from "../component/UserList";

const Home = () => {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch();
  const { userList, total_pages } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(fetchUsers(page))
  }, [page])

  if (!userList) {
    return (
      <>
        <Typography variant="body1" component="p">
          No user to display.
        </Typography>
      </>
    )
  }
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }} >
        <Typography variant="h4" mb={4} mt={4} align="left" >
          View List
        </Typography>
        <Box sx={{
          minWidth: '70vw',
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          padding: 2,
          borderRadius: "4px",
          backgroundColor: "#fff",
          marginX: 10,
        }}>
          <Stack spacing={2} >
            {userList.length > 0 && (
              userList.map((item) =>
                <>
                  <UserList key={item.id} user={item} />
                </>
              )
            )}
          </Stack>
        </Box>
        <Stack direction={'row'} justifyContent="space-between" sx={{
          minWidth: '75vw',
          p: 2,
          marginBottom: 4
        }} >
          <Button
            variant="outlined"
            color="inherit"
            disabled={page === 1} onClick={() => setPage(page - 1)}
            sx={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }} >
            Previous
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            disabled={page === total_pages}
            onClick={() => setPage(page + 1)}
            sx={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }} >
            Next
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Home;