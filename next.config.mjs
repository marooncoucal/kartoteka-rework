/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost"
            },
            {
                hostname: "kartotekacms.ibnd.ru"
            }
        ]
    }
};

export default nextConfig;
