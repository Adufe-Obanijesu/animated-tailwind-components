import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
});

// Export the final Next.js config with Nextra included
export default withNextra({
  webpack: (config) => {
    config.resolve.alias["@"] = new URL("./*", import.meta.url).pathname;
    return config;
  },
});
