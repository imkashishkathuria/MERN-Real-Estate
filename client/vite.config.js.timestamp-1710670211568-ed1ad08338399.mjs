// vite.config.js
import { defineConfig } from "file:///E:/Mern%20Projects/MERN%20Real%20Estate/client/node_modules/vite/dist/node/index.js";
import react from "file:///E:/Mern%20Projects/MERN%20Real%20Estate/client/node_modules/@vitejs/plugin-react-swc/index.mjs";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http"
      }
    }
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxNZXJuIFByb2plY3RzXFxcXE1FUk4gUmVhbCBFc3RhdGVcXFxcY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxNZXJuIFByb2plY3RzXFxcXE1FUk4gUmVhbCBFc3RhdGVcXFxcY2xpZW50XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9NZXJuJTIwUHJvamVjdHMvTUVSTiUyMFJlYWwlMjBFc3RhdGUvY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6e1xuICAgIHByb3h5OntcbiAgICAgICcvYXBpJyA6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cCdcbiAgICAgIH1cbiAgICB9XG5cbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KCldLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1QsU0FBUyxvQkFBb0I7QUFDclYsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQU87QUFBQSxJQUNMLE9BQU07QUFBQSxNQUNKLFFBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBRUY7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDbkIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
