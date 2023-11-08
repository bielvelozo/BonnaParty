'use client'

import HeaderProfile from "@/components/Profile/HeaderProfile";
import EventPage from "@/components/EventContent/EventPage";
import Footer from "@/components/Footer/Footer";

export default function Evento({params}) {
  return (
    <>
      <HeaderProfile />
      <EventPage value={params.slug} />
      <Footer/>
    </>
  );
}
