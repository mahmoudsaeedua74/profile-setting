import Map from "@/components/Map/Map";
import TopNav from "@/components/Navbar/TopNav";
import User from "@/components/UserInfo/User";
import Setting from "@/components/UserSetting/Setting";

export default function Home() {
  return (
    
      <section className="bg-[#F5F5F5] dark:bg-[#222222]">
        <TopNav />
        <section className="mt-10 container  grid  xl:grid-cols-[1fr_2fr_1fr] gap-5 ">
          <User />
          <Setting />
          <Map mini={true} />
        </section>
      </section>
  );
}
