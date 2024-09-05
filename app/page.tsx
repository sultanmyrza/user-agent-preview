import { UserAgentInfo } from "@/components/user-agent-info";
import { headers } from "next/headers";
import { userAgent } from "next/server";

export default function Page() {
  const headersList = headers();
  const ua = userAgent({ headers: headersList });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your User Agent Information</h1>
      <UserAgentInfo ua={ua} />
    </div>
  );
}
