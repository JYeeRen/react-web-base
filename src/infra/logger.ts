import debug from 'debug';

localStorage.debug = 'zipperx:*'

const basic = debug('zipperx');

export const logger = {
  errorBoundary: basic.extend('error-boundary'),
  common: basic.extend('common'),
  infra: basic.extend('infra'),
  features: basic.extend('features'),
  svc: basic.extend('svc'),
  auth: basic.extend('auth'),
};
