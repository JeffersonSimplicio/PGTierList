/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**',
          },
          {
            protocol: 'https',
            hostname: 'instagram.fcpv12-1.fna.fbcdn.net',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'media.licdn.com',
            port: '',
            pathname: '/dms/image/C4E03AQHSlCjSdDOAlA/**',
          },
          {
            protocol: 'https',
            hostname: 'archives.bulbagarden.net',  // Adiciona o domínio aqui
            port: '',
            pathname: '/media/upload/**',  // Especifique o caminho correto
          },
        ],
    },
};

export default nextConfig;
