import { Avatar, Box, Typography, Button, Stack } from '@mui/material'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom"

const UserList = ({ user }) => {
  const navigate = useNavigate()
  return (
    <>
      <Box key={user.id} sx={{ border: '1px solid #ccc', p: 2, mb: 2, borderRadius: 2 }}>
        <Stack direction='row' alignItems={'center'} justifyContent={'space-between'}>
        <Avatar src={user.avatar} alt={user.first_name} />
        <Typography variant="subtitle1" component="p">
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="subtitle1" component="p">
          {user.email}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="outlined" color="primary" sx={{ mr: 1 }} onClick={() => {
            navigate(`/details/${user.id}`)
          }}>
            <VisibilityIcon sx={{ color: "blue" }} />
          </Button>
        </Box>
        </Stack>
      </Box>

    </>
  )
}

export default UserList
