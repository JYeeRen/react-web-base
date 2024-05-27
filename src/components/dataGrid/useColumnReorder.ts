import { useMemo, useState } from "react";
import { type Column } from "react-data-grid";

export function useColumnReorder<TRow, TSummaryRow>(
  columns: Column<TRow, TSummaryRow>[]
) {
  const [columnsOrder, setColumnsOrder] = useState((): readonly number[] =>
    columns.map((_, index) => index)
  );

  const reorderedColumns: readonly Column<TRow, TSummaryRow>[] = useMemo(() => {
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
