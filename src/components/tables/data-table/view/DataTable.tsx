import { ReactElement, useMemo, useState } from "react";
import { DataTableProps } from "../utils/props";
import {
  ColumnFiltersState,
  GroupingState,
  RowSelectionState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

export const DataTable = <T extends object>({ data, columns, onRowClick }: DataTableProps<T>): ReactElement => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [grouping, setGroup] = useState<GroupingState>([]);

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const [globalFilter, setGlobalFilter] = useState("");

  const tblCols = useMemo(() => columns, [columns]);

  const tblData = useMemo(() => data, [data]);

  const table = useReactTable({
    data: tblData,
    columns: tblCols,
    state: { sorting, globalFilter, columnFilters, columnVisibility, grouping, rowSelection },
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    onGroupingChange: setGroup,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
  });

  return (
    <div className="relative border rounded overflow-clip overflow-x-auto shadow-md shadow-gray-50">
      <table className="flex-1 w-full text-left whitespace-no-wrap bg-white table-auto">
        <thead className="text-sm text-gray-600 bg-zinc-50">
          {table.getHeaderGroups().map((group) => {
            return (
              <tr key={group.id}>
                {group.headers.map((header) => {
                  return (
                    <th key={header.id} scope="col" className="px-4 py-2 align-left whitespace-nowrap">
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {/* {header.column.getCanSort() && <SortableColumnSvg />} */}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>

        {/* start of table body */}
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                onClick={() => onRowClick?.(row)}
                className="cursor-pointer even:bg-zinc-50 text-gray-700 border-b border-b-gray-100 last:border-b-transparent hover:bg-gray-50 bg-white"
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className="text-sm px-4 py-2 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
