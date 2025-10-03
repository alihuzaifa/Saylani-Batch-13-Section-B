import { ThemeProvider } from "@/components/theme-provider";
import Router from "./Router";
import { Toaster } from "sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
