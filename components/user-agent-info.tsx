import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { userAgent } from "next/server";

export function UserAgentInfo({ ua }: { ua: ReturnType<typeof userAgent> }) {
  const uaInfo = [
    { label: "Is Bot", value: ua.isBot.toString() },
    {
      label: "Browser",
      value: `${ua.browser.name || "Unknown"} ${ua.browser.version || ""}`,
    },
    {
      label: "Device",
      value: `${ua.device.vendor || ""} ${ua.device.model || ""} (${
        ua.device.type || "Unknown"
      })`,
    },
    {
      label: "Engine",
      value: `${ua.engine.name || "Unknown"} ${ua.engine.version || ""}`,
    },
    { label: "OS", value: `${ua.os.name || "Unknown"} ${ua.os.version || ""}` },
    { label: "CPU Architecture", value: ua.cpu.architecture || "Unknown" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Agent Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {uaInfo.map((info, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{info.label}</TableCell>
                <TableCell>{info.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
