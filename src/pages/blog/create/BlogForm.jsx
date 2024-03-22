import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BlogForm() {
  return (
    <>
      <h1>Create New Blog</h1>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
      <TextField id="title" label="Title" variant="outlined" />
      <TextField id="blog_by" label="Blog by" variant="outlined" />
      <TextField id="publish_date" label="Publish Date" variant="outlined" />
    </Box>

      <Button variant="contained">Submit</Button>
    </>
  )
}
