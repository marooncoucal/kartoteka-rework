/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost"
            },
            {
                protocol: "http",
                hostname: "kartotekacms.ibnd.ru"
            }
        ]
    }
};

export default nextConfig;
