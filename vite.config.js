import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite"; // Tambahkan ini
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tambahkan ini
  ],
});
