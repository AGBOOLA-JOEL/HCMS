import { create } from "zustand";

type ModalStore = {
  modal: boolean;
  show: () => void;
  showAsync: () => Promise<void>;
  hide: () => void;
  toggleShow: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  modal: true,
  show: () => {
    set((state) => ({ modal: (state.modal = true) }));
  },
  showAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    set((state) => ({ modal: (state.modal = true) }));
  },
  hide: () => {
    set((state) => ({ modal: (state.modal = false) }));
  },
  toggleShow: () => {
    set((state) => ({ modal: (!state.modal ) }));
  },
}));
