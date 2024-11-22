import { AppContext } from "./context/AppContext";
import { MessageGenerator } from "./features/messageGenerator/MessageGenerator";
import { useSettingsStorage } from "./hooks/useSettingsStorage";

function App() {
  return (
    <AppContext.Provider value={{ settings: useSettingsStorage() }}>
      <MessageGenerator />
    </AppContext.Provider>
  );
}

export default App;
