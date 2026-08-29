// @ts-check
import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';

const siteConfig = JSON.parse(readFileSync(new URL('./site.config.json', import.meta.url), 'utf8'));
const deploymentName = process.env.DEPLOY_TARGET || siteConfig.defaultDeployment;
const deployment = siteConfig.deployments[deploymentName];

if (!deployment) {
  throw new Error(`Unknown DEPLOY_TARGET "${deploymentName}". Choose one of: ${Object.keys(siteConfig.deployments).join(', ')}.`);
}

export default defineConfig({
  output: 'static',
  site: deployment.site,
  base: deployment.base,
});
