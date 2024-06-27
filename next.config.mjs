/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "file.garden",
        port: "",
      },
    ],
  },
};

export default nextConfig;
