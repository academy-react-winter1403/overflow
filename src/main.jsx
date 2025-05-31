import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";
import { Provider } from "react-redux";
import { RouterProvider, Routes } from "react-router-dom";
import store from "./redux/redux.js";
import {QueryClient , QueryClientProvider } from "@tanstack/react-query";
const queryClient =new QueryClient();

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  // </StrictMode>,
);
