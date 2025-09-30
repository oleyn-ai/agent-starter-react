import type { AppConfig } from './lib/types';

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'oleyn.ai',
  pageTitle: 'Voice Agent',
  pageDescription: 'A voice agent built by oleyn.ai',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/icon-512x512.png',
  accent: '#002cf2',
  logoDark: '/icon-512x512.png',
  accentDark: '#1fd5f9',
  startButtonText: 'Start call',

  agentName: undefined,
};
