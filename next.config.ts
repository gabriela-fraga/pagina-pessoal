import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA) / removes server side advantages like next's API
  distDir: 'build', // Changes the build output directory to `build`
}
 
export default nextConfig