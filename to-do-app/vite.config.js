import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// export default defineConfig({
//   plugins: [react()],
//   server: {
//     watch: {
//       usePolling: true, // Forces Vite to check files manually for updates
//     },
//   },
// })

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server :{
    proxy :{
      '/api':{
        target: 'http://localhost:5000'
      }
    },
    watch: {
      usePolling: true, // Forces Vite to check files manually for updates
    }
  }
})
