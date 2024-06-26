import { Button, Result } from "@components";
import { memo } from "react";
import { Link } from "react-router-dom";

function NotfoundComponent() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  );
}

export const Notfound = memo(NotfoundComponent);
