export {};

declare global {
  interface ErrorResponse {
    message: string;
    field?: string;
  }
}
