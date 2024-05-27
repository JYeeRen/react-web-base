import { memo, useMemo } from "react";
import "react-data-grid/lib/styles.css";
import { logger } from "@infra";
import { Button, DataGrid } from "@components";

import { SelectColumn } from "react-data-grid";

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

function E() {
  logger.common("render E", Date.now());

  const rows = useMemo(
    () =>
      Array(1000)
        .fill(undefined)
        .map((_, idx) => ({ id: idx, title: `Title ${idx}` })),
    []
  );

  return (
    <div>
      <DataGrid rowKey="id" columns={columns} rows={rows} />
    </div>
  );
}

export default memo(E);
