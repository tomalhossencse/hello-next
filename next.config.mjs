/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co", // Adding this as well since your other images use it
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
