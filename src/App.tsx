import { AppContext } from "./context/AppContext";
import { ApplyMessageGeneratorComponent } from "./features/applyMessageGenerator/ApplyMessageGeneratorComponent";
import { useSettingsStorage } from "./hooks/useSettingsStorage";

function App() {
  return (
    <AppContext.Provider value={{ settings: useSettingsStorage() }}>
      <ApplyMessageGeneratorComponent />
    </AppContext.Provider>
  );
}

export default App;
