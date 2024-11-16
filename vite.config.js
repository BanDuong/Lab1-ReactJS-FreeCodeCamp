import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base:'/lab1-reactjs-freecodecamp/',
  plugins: [react()],
})
