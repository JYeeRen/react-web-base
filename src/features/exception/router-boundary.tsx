import { useRouteError } from "react-router-dom";
import { logger } from "@infra";

export function RouteErrorBoundary() {
  const error = useRouteError() as Error;
  logger.errorBoundary(error);

  return <div>Ops!</div>
};