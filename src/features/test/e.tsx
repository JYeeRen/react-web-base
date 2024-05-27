import { memo, useCallback, useMemo, useState } from "react";
import "react-data-grid/lib/styles.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import DataGrid, {
  Column,
  RenderCheckboxProps,
  RenderRowProps,
  SelectColumn,
} from "react-data-grid";
import { logger } from "@infra";
import { Button, Checkbox, CheckboxProps } from "@components";

import styles from "./e.module.less";
import { DraggableRowRenderer } from "./draggableRowRenderer";

function useColumnReorder<TRow, TSummaryRow>(
  columns: Column<TRow, TSummaryRow>[]
) {
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
      return newOrder;
    });
  }

  return { columns: reorderedColumns, onColumnsReorder };
}

function E() {
  logger.common("render E", Date.now());

  const columns = [
    {
      ...SelectColumn,
    },
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

  const initialRows = useMemo(
    () =>
      Array(10000)
        .fill(undefined)
        .map((_, idx) => ({ id: idx, title: `Title ${idx}` })),
    []
  );

  const columnReorderProps = useColumnReorder(columns);

  const [rows, setRows] = useState(initialRows);
  const [selectedRows, setSelectedRows] = useState(
    (): ReadonlySet<number> => new Set()
  );

  const rowKeyGetter = useCallback((row: { id: number }) => row.id, []);

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
      return newOrder;
    });
  }

  const renderRow = useCallback(
    (key: React.Key, props: RenderRowProps<any>) => {
      function onRowReorder(fromIndex: number, toIndex: number) {
        setRows((rows) => {
          const newRows = [...rows];
          newRows.splice(toIndex, 0, newRows.splice(fromIndex, 1)[0]);
          return newRows;
        });
      }

      return (
        <DraggableRowRenderer
          key={key}
          {...props}
          onRowReorder={onRowReorder}
        />
      );
    },
    []
  );

  return (
    <div className={styles.container}>
      <div style={{ width: 100, height: 200 }}>1</div>
      <DndProvider backend={HTML5Backend}>
        <DataGrid
          className={styles.fillGrid}
          style={{ resize: "vertical", minHeight: 200 }}
          {...columnReorderProps}
          // columns={reorderedColumns}
          // onColumnsReorder={onColumnsReorder}
          rows={rows}
          onRowsChange={setRows}
          selectedRows={selectedRows}
          rowKeyGetter={rowKeyGetter}
          onSelectedRowsChange={setSelectedRows}
          renderers={{ renderRow, renderCheckbox }}
          defaultColumnOptions={{
            draggable: true,
            resizable: true,
            minWidth: 100,
          }}
        />
      </DndProvider>
    </div>
  );
}

function renderCheckbox({ onChange, ...props }: RenderCheckboxProps) {
  const handleChange: CheckboxProps["onChange"] = (e) => {
    onChange(e.target.checked, e.nativeEvent.shiftKey);
  };

  return <Checkbox {...props} onChange={handleChange} />;
}

export default memo(E);
