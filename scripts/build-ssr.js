import { build } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function buildSSR() {
  try {
    console.log('🔨 Building client...');
    await build({
      build: {
        outDir: 'dist/client',
        rollupOptions: {
          input: 'index.html'
        }
      }
    });

    console.log('🔨 Building server...');
    await build({
      build: {
        ssr: true,
        outDir: 'dist/server',
        rollupOptions: {
          input: 'src/server/server.ts'
        }
      }
    });

    console.log('✅ SSR build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildSSR();
