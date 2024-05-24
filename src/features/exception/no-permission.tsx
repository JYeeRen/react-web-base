import { Button, Result } from "@components";
import { memo } from "react";
import { Link } from "react-router-dom";

function NoPermissionComponent() {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  );
}

export const NoPermission = memo(NoPermissionComponent);
