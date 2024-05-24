import { Button, Result } from "@components";
import { memo } from "react";
import { Link } from "react-router-dom";

function ServerErrorComponent() {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  );
}

export const ServerError = memo(ServerErrorComponent);
