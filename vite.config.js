import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.108', // Your local IP
    port: 3000, // Optional: specify a port
    strictPort: true // Optional: prevent fallback to another port
  }
});
