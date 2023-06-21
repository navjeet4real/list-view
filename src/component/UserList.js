import { Avatar, Box, Typography, Button, Stack } from '@mui/material'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom"

const UserList = ({ user }) => {
  const navigate = useNavigate()
  return (
    <>
      <Box key={user.id} sx={{ border: '1px solid #ccc', p: 2, mb: 2, borderRadius: 2 }}>
        <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row'
            },
            width: '100%'
          }}>
          <Avatar src={user.avatar} alt={user.first_name} />
          <Typography variant="subtitle1" component="p" sx={{
            height: '100%',
            px: 1
          }}>
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant="subtitle1" component="p" sx={{
            height: '100%',
            px: 1,
            alignSelf: 'center'
          }}>
            {user.email}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outlined" color="primary"  onClick={() => {
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
