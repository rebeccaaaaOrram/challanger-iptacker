import { useIpTracker } from "@/hooks/useIpTracker";
import { Card } from "../Card";

export function Summary() {
  const { data } = useIpTracker();
  return (
    <div
      className="flex items-center justify-center gap-28 mt-[-2rem] bg-white max-w-max m-auto p-8 
                      rounded-md max-sm:flex-col max-sm:gap-10 max-sm:items-start relative z-10"
    >
      <Card title="IP Address" content={data && data.ip} />
      <Card title="Location" content={data && data.location.country} />
      <Card title="Timezone" content={data && data.location.timezone} />
      <Card title="ISP" content={data && data.isp} />
    </div>
  );
}
