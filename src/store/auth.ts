import { create } from "zustand";
import { persist } from "zustand/middleware";

import { User } from "@prisma/client";

export interface IAuthState {
  token?: string;
  setToken: (t: string) => void;
  user?: Partial<User>;
  setUser: (a: Partial<User> | undefined) => void;
  _hasHydrated: boolean;
  setHasHydrated: (a: boolean) => void;
  logout: () => void;
}

const INITIAL_STATE = {
  token: undefined,
  user: undefined,
};

export const useAuthStore = create<
  IAuthState,
  [["zustand/persist", IAuthState]]
>(
  persist(
    (set) => ({
      ...INITIAL_STATE,
      setToken: (token) => {
        set({
          token,
        });
      },

      setUser: (user) => {
        set({
          user,
        });
      },

      _hasHydrated: false,
      setHasHydrated: (state) => {
        set({
          _hasHydrated: state,
        });
      },

      logout: () => set({ token: undefined, user: undefined }),
    }),
    {
      name: "auth",
      skipHydration: typeof window === "undefined",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHasHydrated(true);
        }
      },
    }
  )
);
