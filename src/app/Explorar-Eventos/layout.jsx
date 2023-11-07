"use client";
import HeaderProfile from "@/components/Profile/HeaderProfile";
import { Container } from "@/globalStyles";

export default function RootLayout({ children }) {
  return (
    <>
      <HeaderProfile />
      <Container>{children}</Container>
    </>
  );
}
