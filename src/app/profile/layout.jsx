"use client";
import HeaderProfile from "@/components/Profile/HeaderProfile";
import ProfileCards from "@/components/Profile/Cards/ProfileCards";
import { Center } from "@/styles/profileCards.style";
import { DivCards } from "@/styles/profileCards.style";
import { Container } from "@/globalStyles";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <HeaderProfile />
      <div>
        <Container>
          <DivCards>
            <Center>
              {children}
              <ProfileCards />
            </Center>
          </DivCards>
        </Container>
      </div>
          <Footer />
    </>
  );
}
