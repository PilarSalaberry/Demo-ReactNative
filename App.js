import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}
