import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { headers } from "next/headers";

export function HeaderList({ headersList }: { headersList: ReturnType<typeof headers> }) {
  const headerEntries = Array.from(headersList.entries());

  return (
    <Card>
      <CardHeader>
        <CardTitle>Header List</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Header Name</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {headerEntries.map(([name, value], index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{name}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}