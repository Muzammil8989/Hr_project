import { ThemeProvider } from "./components/ui/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import Design from "./components/my_component/design";

import AnimatedCursor from "react-animated-cursor";

import "./App.css";

import Home from "./Pages/Home/Home";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div className="app-background">
        <div className="absolute right-4 top-4 z-50">
          <ModeToggle />
        </div>

        <Design />
        <div className="">
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
