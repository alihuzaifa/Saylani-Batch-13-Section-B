import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function TrainerList() {
  const data = [];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((invoice) => {
          return (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.name}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell>{invoice.phone}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
export default TrainerList;
