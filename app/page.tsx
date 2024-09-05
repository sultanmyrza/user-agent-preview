import { HeaderList } from "@/components/header-list";
import { UserAgentInfo } from "@/components/user-agent-info";
import { headers } from "next/headers";
import { userAgent } from "next/server";

export default function Page() {
  const headersList = headers();
  const ua = userAgent({ headers: headersList });

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-4">
        <UserAgentInfo ua={ua} />
        <HeaderList headersList={headersList} />
      </div>
    </div>
  );
}
