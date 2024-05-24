import { PropsWithChildren } from "react";
import { logger } from "../infra/logger";
import { RouteObject } from "@types";
import { intersection } from 'lodash';
import { Navigate } from "react-router-dom";
import { appService } from "../services/app.service";

interface AuthGuardProps extends PropsWithChildren {
  router: RouteObject;
}

function AuthGuardComponent(props: AuthGuardProps) {
  const { router, children } = props;

  const auth = appService.auth;

  logger.auth('auth', router.path, 'with permissions: ', router.permission);

  if (router.permission?.length && intersection(auth, router.permission).length === 0) {
    logger.auth('auth', router.path, 'failed');
    return <Navigate to="/no-permission" />;
  }

  return children;
}

export const AuthGuard = AuthGuardComponent;
