import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { logger } from '../logger';

/**
 * Factory for the request logger middleware. The clock is injected so request
 * duration is measured against the same time source as the rest of the app.
 */
export function createRequestLogger(clock: IClock) {
  return function requestLogger(req: Request, res: Response, next: NextFunction): void {
    const correlationId = (req.headers['x-correlation-id'] as string) || uuidv4();
    const startTime = clock.now().getTime();

    req.headers['x-correlation-id'] = correlationId;

    logger.info('Incoming request', {
      correlationId,
      method: req.method,
      path: req.path,
      query: req.query,
      ip: req.ip,
      userAgent: req.get('user-agent'),
    });

    res.on('finish', () => {
      const duration = clock.now().getTime() - startTime;
      const logLevel = res.statusCode >= 400 ? 'warn' : 'info';

      logger[logLevel]('Request completed', {
        correlationId,
        method: req.method,
        path: req.path,
        statusCode: res.statusCode,
        duration: `${duration}ms`,
      });
    });

    next();
  };
}
