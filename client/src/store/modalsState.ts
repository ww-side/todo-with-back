import { create } from "zustand";

type Store = {
  isAddModalOpen: boolean;
  isEditModalOpen: boolean;
  changeAddModalState: () => void;
  changeEditModalState: () => void;
};

export const useModalState = create<Store>((set) => ({
  isEditModalOpen: false,
  isAddModalOpen: false,
  changeAddModalState: () => {
    set((state) => ({
      isAddModalOpen: !state.isAddModalOpen,
    }));
  },
  changeEditModalState: () => {
    set((state) => ({
      isEditModalOpen: !state.isEditModalOpen,
    }));
  },
}));
