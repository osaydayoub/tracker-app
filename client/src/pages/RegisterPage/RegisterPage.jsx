import React, { useState } from 'react'
import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Register with:", email, password);

    }

    return (
        <>
            <div>RegisterPage</div>
            <Box component="form" onSubmit={handleSubmit} maxWidth={420} mx="auto" mt={8}>
                <Paper sx={{ p: 3 }}>
                    <Typography variant='h6' sx={{ mb: 2 }}>
                        Create account
                    </Typography>
                    <Stack spacing={2}>
                        <TextField
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth />
                        <TextField
                            label="Password"
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth />
                        <Button variant='contained' type='submit'>
                            Sign up
                        </Button>
                    </Stack>




                </Paper>
            </Box>
        </>

    )
}

export default RegisterPage