import { Key, useCallback, useState } from "react";
import DataGrid, { DataGridProps } from "react-data-grid";
import { Pagination, PaginationProps } from "@components";
import { renderCheckbox } from "./renderCheckbox";
import "react-data-grid/lib/styles.css";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { DraggableRowRenderer } from "./draggableRowRenderer";
import styles from "./dataGrid.module.less";

interface Props<R, SR> extends DataGridProps<R, SR> {
  rowKey: keyof R;
  pagination?: PaginationProps;
}

function DataGridImpl<R, SR>(props: Props<R, SR>) {

  const { columns, rows, rowKey, ...restProps } = props;

  // const columnReorderProps = useColumnReorder(columns);

  const [dataSource] = useState(rows);
  const [selectedRows, setSelectedRows] = useState(
    (): ReadonlySet<number> => new Set()
  );

  const rowKeyGetter = useCallback((row: R) => row[rowKey] as Key, []);

  // const [columnsOrder, setColumnsOrder] = useState((): readonly number[] =>
  //   columns.map((_, index) => index)
  // );

  // const renderRow = useCallback(
  //   (key: React.Key, props: RenderRowProps<any>) => {
  //     function onRowReorder(fromIndex: number, toIndex: number) {
  //       setRows((rows) => {
  //         const newRows = [...rows];
  //         newRows.splice(toIndex, 0, newRows.splice(fromIndex, 1)[0]);
  //         return newRows;
  //       });
  //     }

  //     return (
  //       <DraggableRowRenderer
  //         key={key}
  //         {...props}
  //         onRowReorder={onRowReorder}
  //       />
  //     );
  //   },
  //   []
  // );

  const paginationProps: PaginationProps = {
    className: styles.pagination,
    total: rows.length,
    pageSize: 1000,
    // total: gridStore.total,
    // pageSize: gridStore.pageSize,
    // current: gridStore.page,
    // showTotal: (total) => t("共{{total}}条", { total }),
    showTotal: () => "共1000条",
    showQuickJumper: true,
    showSizeChanger: true,
    pageSizeOptions: [100, 500, 1000],
    defaultPageSize: 1000,
    size: "default",
    // onChange: gridStore.onTableChange.bind(gridStore),
  };

  return (
    <div className={styles.container}>
      {/* <DndProvider backend={HTML5Backend}> */}
        <DataGrid
          className={styles.fillGrid}
          style={{ resize: "vertical", minHeight: 450 }}
          selectedRows={selectedRows}
          rowKeyGetter={rowKeyGetter}
          onSelectedRowsChange={setSelectedRows}
          renderers={{ renderCheckbox }}
          defaultColumnOptions={{
            draggable: true,
            resizable: true,
            minWidth: 100, 
          }}
          {...restProps}
          columns={columns}
          rows={dataSource}
          // columns={reorderedColumns}
          // onColumnsReorder={onColumnsReorder}
          // onRowsChange={setRows}
        />
        <Pagination {...paginationProps} />
      {/* </DndProvider> */}
    </div>
  );
}



export default DataGridImpl;
