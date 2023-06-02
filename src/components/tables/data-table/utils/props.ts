import { ColumnDef, Row } from "@tanstack/react-table";

export type DataTableProps<T> = {
  data: Array<T>;
  columns: Array<ColumnDef<T, unknown>>;
  onRowClick?: (row: Row<T>) => void;
};
