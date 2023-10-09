import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function Table({
  className,
  ...props
}: ComponentProps<"div">) {
  return <div className={cn(className)} {...props} />;
}

export const TableRow = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div className={cn(className)} {...props} />
);

Table.Row = TableRow;

export const TableCell = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div className={cn(className)} {...props} />
);

Table.Cell = TableCell;
