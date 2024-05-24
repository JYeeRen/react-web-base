import { Component, PropsWithChildren } from "react";
// import { message } from "@components";
// import { AnyError } from "./error/types";
// import { ErrorHandler } from "./error/handler";
import { logger } from '@infra';

type ErrorBoundaryState =
  | {
      didCatch: true;
      error: any;
      block: boolean;
    }
  | {
      didCatch: false;
      block: false;
      error: null;
    };

const initialState: ErrorBoundaryState = {
  didCatch: false,
  block: false,
  error: null,
};

interface BoundaryProps extends PropsWithChildren {
  // layer: string;
}

export class ErrorBoundary extends Component<BoundaryProps, ErrorBoundaryState> {
  // private readonly handler: ErrorHandler;
  // layer: string;

  constructor(props: BoundaryProps) {
    super(props);
    this.state = initialState;
    // this.layer = props.layer || 'root';
    // this.handler = new ErrorHandler();

    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
    this.catchError = this.catchError.bind(this);
    this.catchRejectEvent = this.catchRejectEvent.bind(this);

  }

  /**
   * 返回值会更新到组件的 state 中
   */
  static getDerivedStateFromError(error: Error) {
    logger.errorBoundary("getDerivedStateFromError");
    return { didCatch: true, error, block: true };
  }  

  resetErrorBoundary() {
    const { error } = this.state;
    if (error !== null) {
      this.setState(initialState);
    }
  }

  /**
   * 只能捕获 react 渲染异常
   */ 
  componentDidCatch() {
  // componentDidCatch(error: Error, info: ErrorInfo) {
    // this.handler.handleRenderError(error, info);
    // logger.errorBoundary(this.layer, "TODO 解析错误类型");
    logger.errorBoundary("TODO 解析错误类型");
  }

  componentDidMount(): void {
    window.addEventListener('error', this.catchError, true);
    window.addEventListener('unhandledrejection', this.catchRejectEvent, true);
  }

  componentWillUnmount(): void {
    window.removeEventListener('error', this.catchError, true);
    window.removeEventListener('unhandledrejection', this.catchRejectEvent, true);
  }

  /**
   * 捕获「同步方法 & 异步方法 & 资源加载 异常」
   */
  private catchError(): void {
  // private catchError(error: ErrorEvent): void {
    // logger.errorBoundary(this.layer, 'catchError');
    logger.errorBoundary('catchError');
    // const parsed = this.handler.handleUncaughtError(error);
    // if (parsed.type === "ignore") {
    //   return;
    // }

    // return this.alert(parsed.formatted ?? parsed.message);
  }

  /**
   * 捕获「promise & async/await 异常」
   */
  private catchRejectEvent(): void {
  // private catchRejectEvent(error: PromiseRejectionEvent): void {
    // logger.errorBoundary(this.layer, 'catchError');("catchRejectEvent");
    logger.errorBoundary('catchError');("catchRejectEvent");
    // const parsed = this.handler.handleRejectError(error);
    // if (parsed.type === "ignore") {
    //   return;
    // }
    // if (parsed.type === "alert") {
    //   return this.alert(parsed.formatted ?? parsed.message);
    // }
    // if (parsed.type === "confirm") {
    //   return this.confirm(parsed.formatted ?? parsed.message);
    // }

    // this.setState({ error: parsed });
  }

  // alert(msg: string | string[]) {
  //   message.error(msg);
  // }

  // confirm(msg: string | string[]) {
  //   logger.infra("confrim", msg);
  // }

  render() {
    logger.errorBoundary('render', this.props, this.state);
    // if (this.state.block) {
      return (<div>Ops!</div>);
    // }

    // return this.props.children;
  }
}
