import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/Store.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// using React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={new QueryClient()}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
);
