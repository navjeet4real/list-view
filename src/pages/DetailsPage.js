import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const DetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { userList } = useSelector((state) => state.app)
  const user = userList.find(item => item.id == id)
  console.log(user, "user details")
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Stack alignItems={'start'}>
          <Button variant="outlined" color="inherit" onClick={() => {
            navigate("/home")
          }}>Back</Button>
        </Stack>
        <Box
          sx={{
            width: "100%",
            maxWidth: 700,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            padding: '16px',
            height: 500,
            borderRadius: '4px',
            backgroundColor: '#fff',
            marginBottom: '16px'
          }}>

          <Stack direction="column" spacing={2} alignItems="center" justifyContent={'space-between'}>
            <Avatar sx={{ width: 124, height: 124 }} src={user.avatar} alt="Avatar" />
            <Typography variant="h5">{`${user.first_name} ${user.last_name}`}</Typography>
            <Typography variant="body1">{user.email}</Typography>
          </Stack>

        </Box>
      </Box>

    </>
  )
}

export default DetailsPage
