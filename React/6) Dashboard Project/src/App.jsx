import { ThemeProvider } from "@/components/theme-provider";
import Router from "./Router";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router />
    </ThemeProvider>
  );
}

export default App;
