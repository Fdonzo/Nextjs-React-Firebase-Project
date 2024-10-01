/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// eslint-disable-next-line no-undef
module.exports = {
  nextConfig,
  /*
  async redirects() {
    return {
      source: "/d3",
      destination: "/about",
      permanent: false,
    };
  },
  */

  async headers() {
    return [
      {
        // matching all API routes
        source: "/_next/:path*",
        //"/_next/:path*",
        //"/api/:path*",
        //"/decimation",
        //"localhost:3000",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "*" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.upwork.com/",
            //"https://smartdevpreneur.com/tailoring-the-material-ui-card-component/",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "*",
            //"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },

  /*
  async headers() {
    return [
      {
        source: "/decimation",
        //"/*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.upwork.com/",
          },
        ],
      },
    ];
  },
  */
};
