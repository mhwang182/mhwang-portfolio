/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        EMAIL_ACCESS_KEY: process.env.NEXT_PUBLIC_EMAIL_ACCESS_KEY
    }
};

export default nextConfig;
