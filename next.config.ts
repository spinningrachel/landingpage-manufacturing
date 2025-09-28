import type { NextConfig } from "next";
import userConfig from './clouduser.next.config.js';

const webflowOverrides: NextConfig = {
  basePath: '/manufacturing',
  assetPrefix: 'https://20faf3fb-6591-4e16-8393-a1f01e39f7f7.wf-app-prod.cosmic.webflow.services/manufacturing',
  images: {
    ...userConfig.images,
    // TODO: determine whether any of the non-custom loader options (imgix, cloudinary, akamai) work
    // and if so allow them to be used here
    loader: 'custom',
    loaderFile: userConfig.images?.loaderFile || './webflow-loader.ts',
  },
};

const nextConfig: NextConfig = {
  ...userConfig,
  ...webflowOverrides,
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
