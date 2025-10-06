import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAppStore = create()(
  persist(
    (set) => ({
      token: "",
      setToken: (token) => set(() => ({ token })),
    }),
    {
      name: "app-storage",
    }
  )
);

export default useAppStore;
