import Image from "next/image";
import Genesys_logo from "@/public/Photos/Genesys_logo.webp";
import Cocreatelab_logo from "@/public/Photos/Cocreatelab_logo.webp";
import manusherghorbari_logo from "@/public/Photos/manusherghorbari_logo.webp";
import premierautosource_logo from "@/public/Photos/premierautosource_logo.webp";
import shrc_logo from "@/public/Photos/Shrc_logo.webp";
import whitespreadfoods_logo from "@/public/Photos/whitespreadfoods_logo.webp";
import NS_logo from "@/public/Photos/NS_logo.webp";
import khanconsultants_logo from "@/public/Photos/khanconsultants_logo.webp";
import new_company_logo from "@/public/Photos/new_company_logo.webp";
import Facalties_online_logo from "@/public/Photos/Facalties_online_logo.webp";
import English_faculties_logo from "@/public/Photos/English_faculties_logo.webp";
import Fabcon_Logo from "@/public/Photos/Fabcon Logo.webp";
import aereo_logo from "@/public/Photos/aereo_logo.webp";
import consortium_logo from "@/public/Photos/consortium_logo.webp";

const Clients = [
  Genesys_logo,
  Cocreatelab_logo,
  manusherghorbari_logo,
  premierautosource_logo,
  whitespreadfoods_logo,
  shrc_logo,
  NS_logo,
  Fabcon_Logo,
  khanconsultants_logo,
  English_faculties_logo,
  Facalties_online_logo,
  new_company_logo,
  aereo_logo,
  consortium_logo

];

const HappyClients = () => {
  return (
    <section className="relative py-8 max-sm:py-2 max-sm:px-4 bg-gray-900">
      <h1 className="text-white text-center text-3xl font-semibold mb-10">
        Our Happy Clients
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-6 max-w-6xl h-[350px] mx-auto">
        {Clients.map((client, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden group"
          >
            <Image
              className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-105 cursor-pointer"
              src={client}
              alt={`Client logo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyClients;

