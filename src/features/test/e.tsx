import { memo, useMemo, useState } from "react";
import "react-data-grid/lib/styles.css";

import DataGrid, { SelectColumn } from "react-data-grid";
import { logger } from "@infra";
import { Button } from "@components";

const columns = [
  SelectColumn,
  { key: "id", name: "ID" },
  { key: "title", name: "Title" },
  {
    key: "btn",
    name: "BTN",
    renderCell: () => {
      return <Button type="primary">BTN</Button>;
    },
  },
];

const initialRows = [
  { id: 0, title: "Example" },
  {
    id: 1,
    title: "Demo",
  },
];

function E() {
  logger.common("render E", Date.now());

  const [rows, setRows] = useState(initialRows);
  const [selectedRows, setSelectedRows] = useState((): ReadonlySet<number> => new Set());

  const [columnsOrder, setColumnsOrder] = useState((): readonly number[] =>
    columns.map((_, index) => index)
  );

  const reorderedColumns = useMemo(() => {
    return columnsOrder.map((index) => columns[index]);
  }, [columnsOrder]);

  function onColumnsReorder(sourceKey: string, targetKey: string) {
    setColumnsOrder((columnsOrder) => {
      const sourceColumnOrderIndex = columnsOrder.findIndex(
        (index) => columns[index].key === sourceKey
      );
      const targetColumnOrderIndex = columnsOrder.findIndex(
        (index) => columns[index].key === targetKey
      );
      const newOrder = [...columnsOrder];
      const sourceColumnOrder = columnsOrder[sourceColumnOrderIndex];
      newOrder.splice(sourceColumnOrderIndex, 1);
      newOrder.splice(targetColumnOrderIndex, 0, sourceColumnOrder);
      // const newColumnsOrder = [...columnsOrder].splice(sourceColumnOrderIndex, 1);
      // const newColumnsOrder = columnsOrder.toSpliced(sourceColumnOrderIndex, 1);
      // newColumnsOrder.splice(targetColumnOrderIndex, 0, sourceColumnOrder);
      // return newColumnsOrder;
      return newOrder;
    });
  }

  return (
    <DataGrid
      columns={reorderedColumns}
      onColumnsReorder={onColumnsReorder}
      rows={rows}
      onRowsChange={setRows}
      selectedRows={selectedRows}
      rowKeyGetter={(row) => row.id}
      onSelectedRowsChange={setSelectedRows}
      defaultColumnOptions={{
        // sortable: true,
        draggable: true,
        resizable: true,
      }}
    />
  );
}

export default memo(E);
