import configuration from '../../../site.config.json';

export const siteConfig = configuration;
export const canonicalSite = new URL(siteConfig.deployments.customDomain.site);
