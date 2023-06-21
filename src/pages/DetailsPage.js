import { Avatar, Box, Button, IconButton, Stack, Typography, Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowBack } from "@mui/icons-material";

const DetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { userList } = useSelector((state) => state.app)
  const user = userList.find(item => item.id == id)
  console.log(user, "user details")
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          width: "100%",
          maxWidth: 800,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Stack
          spacing={3}
          direction={"row"}
          justifyContent="left"
          alignItems={"center"}
          sx={{ position: "absolute", top: "18vh", left: "18vh", zIndex: 1 }}
        >
          <IconButton onClick={() => {
            navigate('/home')
          }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6">Home</Typography>
        </Stack>
        <Grid container alignItems="center" sx={{
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#ffffff",
          padding: 4,
          borderRadius: 4,
        }}>
          <Grid item xs={12} sm={3}  >
            <Avatar alt={user.username} src={user.avatar} sx={{ width: 120, height: 120 }} />
          </Grid>
          <Grid item xs={12} sm={9} >
            <Typography variant="h4" gutterBottom>
              {user.first_name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {user.email}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default DetailsPage
