import Image from "next/image";
import Arrow from "../../../public/images/icon-arrow.svg";
import { useIpTracker } from "@/hooks/useIpTracker";

export function Header() {
  const { handleSubmit, setValue } = useIpTracker();
  return (
    <header className="bg-hero-pattern h-[15rem] bg-cover  flex flex-col pt-10  items-center">
      <h1 className="text-white text-[25px]">Ip Address Tracker</h1>
      <form className="mt-11 flex items-center">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for any IP address or domain"
          className="bg-white rounded-md p-2 w-96 rounded-e-max-sm focus:outline-none"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-black text-white rounded-md p-2 rounded-s"
        >
          <Image src={Arrow} alt="Icon" width={21} />
        </button>
      </form>
    </header>
  );
}
