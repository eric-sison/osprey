import type { Meta, StoryObj } from "@storybook/react";
import { DataTable as DataTableComponent } from "../../../components/tables/data-table/view/DataTable";
import { Person, personColumns, personData } from "./utils";
import { ColumnDef } from "@tanstack/react-table";

const meta = {
  title: "Components/DataTable",
  component: DataTableComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DataTableComponent<Person>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: personColumns as ColumnDef<object, unknown>[],
    data: personData,
  },
};
