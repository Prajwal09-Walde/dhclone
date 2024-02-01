/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.themoviedb.org",
            },

            {
                protocol: "https",
                hostname: "links.papareact.com",
            },

            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
            },

        ],
    }
};

module.exports = nextConfig;
