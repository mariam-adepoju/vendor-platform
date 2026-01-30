/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true,
    cacheComponents: true,
    allowedDevOrigins: [process.env.MY_IP, "localhost:3000"]
};

export default nextConfig;
