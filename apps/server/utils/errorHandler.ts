import { Logger } from "../middlewares/logger";

interface StreamError extends Error {
  code: string;
  metadata?: Record<string, any>;
}

class StreamErrorHandler {
  static readonly ErrorCodes = {
    STREAM_CONNECTION_LOST: "STREAM_CONNECTION_LOST",
    TRANSCODING_FAILED: "TRANSCODING_FAILED",
    STREAM_NOT_FOUND: "STREAM_NOT_FOUND",
    STORAGE_ERROR: "STORAGE_ERROR",
    RATE_LIMIT_EXCEEDED: "RATE_LIMIT_EXCEEDED",
    INVALID_STREAM_KEY: "INVALID_STREAM_KEY",
  };

  constructor(private readonly logger: Logger) {
    this.logger = logger;
  }

  async handleError(error: StreamError): Promise<void> {
    await this.logger.error(error.message, error.metadata);
  }
}

export default StreamErrorHandler;
