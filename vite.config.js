import vue from '@vitejs/plugin-vue'

export default {
  base: './',
  plugins: [vue()],
  optimizeDeps: {
    include: ['schart.js']
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:81',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}