import HeaderProfile from "@/components/Profile/HeaderProfile";
import EventPage from "@/components/EventContent/EventPage";

export default function Evento({params}) {
  return (
    <>
      <HeaderProfile />
      <EventPage value={params.slug} />
    </>
  );
}
