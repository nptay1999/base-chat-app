import React from "react"
import google from "../../assets/search.png"
import styled from "styled-components"
import { Box, Button, Container, Typography } from "@mui/material"
import { auth } from "../../firebase/config"
import {
  AuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { addDocument, generateKeywords } from "../../firebase/services"

const Mr2Span = styled.span`
  margin-right: 5px;
`

const googleProvider = new GoogleAuthProvider()

const Login = () => {
  const handleLogin = async (provider: AuthProvider) => {
    const { _tokenResponse, user }: any = await signInWithPopup(auth, provider)
    if (_tokenResponse?.isNewUser) {
      addDocument("users", {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        providerId: user.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase() || ""),
      })
    }
  }
  return (
    <Container maxWidth="sm">
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h2" component="div" gutterBottom>
          Login
        </Typography>
        <Button variant="contained" onClick={() => handleLogin(googleProvider)}>
          <Mr2Span>Login with Google</Mr2Span>{" "}
          <img src={google} alt="icon" width={24} />
        </Button>
      </Box>
    </Container>
  )
}

export default Login
