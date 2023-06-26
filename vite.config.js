<<<<<<< HEAD
·
=======
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [createVuePlugin()],
    server: {
      port: 8080
    },
    preview: {
      port: 8080,
      https: true
    },
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.d.ts']
    }
  }
})
>>>>>>> a27f0732d2452835f12ea015798c505a92583d5e
