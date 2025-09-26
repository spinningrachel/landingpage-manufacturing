import type { OpenNextConfig } from "open-next/types";

const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare",
    },
  },
};

export default config;