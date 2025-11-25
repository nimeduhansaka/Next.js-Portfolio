/** @type {import('next').NextConfig} */
import nextBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  compiler: {
    reactCompiler: true,
  },
};

export default withBundleAnalyzer(nextConfig);
