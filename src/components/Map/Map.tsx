"use client";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "./Map.module.css";
// import { useLocale, useTranslations } from "next-intl";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});
export default function Map({mini=false}:{mini:boolean}) {

  const position: [number, number] = [29.9759002, 31.1308735];
//   const local = useLocale();
//   let x;
  //if local ===ar it's change the offset of tooltip to make it look at marker
//   if (local === "ar") {
//     x = 320;
//   } else x = 0;
  return (
   <section  className="dark:bg-[#222222]">
   <div className={` ${mini?"space-y-2 mb-2":" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  xl:grid-cols-4 gap-5  p-5"}`}>
    <div className="rounded-[20px] bg-white dark:bg-[#1E1E1E] dark:text-white p-5 shadow-[0px_2px_4px_rgba(0,0,0,0.30)]">
        <p className="text-[20px] font-semibold">Total de Vehículos</p>
        <p className="font-semibold text-[64px]">18</p>
    </div>
    <div className="rounded-[20px] bg-white dark:bg-[#1E1E1E] dark:text-white p-5 shadow-[0px_2px_4px_rgba(0,0,0,0.30)]">
        <p className="text-[20px] font-semibold">Total de Vehículos</p>
        <p className="font-semibold text-[64px] text-[#D50000]">16</p>
    </div>
    <div className="rounded-[20px] bg-white dark:bg-[#1E1E1E] dark:text-white p-5 shadow-[0px_2px_4px_rgba(0,0,0,0.30)]">
        <p className="text-[20px] font-semibold">Total de Vehículos</p>
        <p className="font-semibold text-[64px] text-[#00318F]">17</p>
    </div>
    <div className="rounded-[20px] bg-white dark:bg-[#1E1E1E] dark:text-white p-5 shadow-[0px_2px_4px_rgba(0,0,0,0.30)]">
        <p className="text-[20px] font-semibold">Total de Vehículos</p>
        <p className="font-semibold text-[64px] text-[#00D53C]">1</p>
    </div>
   </div>
    <div className={`${styles.mapContainer} ${mini?"h-[150px]":"h-[698px] px-5"}  dark:bg-[#1E1E1E]`}>
      <div className={`${styles.foggy} ${styles.top}`}></div>
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={true}
        zoomControl={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Tooltip
            direction="top"
            offset={[0, -70]}
            opacity={1}
            
            permanent
            className={`${styles.mapMark}`}
          >
            <div className="max-w-[312px] h-auto text-wrap overflow-hidden text-lg px-6 py-4 before:left-0">
              <p className=" text-xl max-w-40">
                <span className="font-bold">Giza</span>{" "}
                <span className={styles.markColor}>pyramids </span>{" "}
                 
              </p>
            </div>
          </Tooltip>
        </Marker>
      </MapContainer>
      <div className={`${styles.foggy} ${styles.bottom}`}></div>
    </div>
   </section>
  );
}
