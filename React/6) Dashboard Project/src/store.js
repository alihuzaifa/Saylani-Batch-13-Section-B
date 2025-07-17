import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAppStore = create()(
  persist(
    (set) => ({
      userId: "",
      setUserId: (id) => set(() => ({ userId: id })),
    }),
    {
      name: "app-storage",
    }
  )
);
export default useAppStore;
