import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = [];

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState: estadoInicial,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const temItem = state.some((item) => item.id === payload);
      if (!temItem) {
        return [
          ...state,
          {
            id: payload,
            quantidade: 1,
          },
        ];
      }
      return state.filter((item) => item.id !== payload);
    },
  },
});

export const { mudarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
