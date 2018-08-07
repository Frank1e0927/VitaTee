export const apps = {
  state: [1],
  reducers: {
    add(state, payload) {
      return [...state, payload]
    }
  }
}