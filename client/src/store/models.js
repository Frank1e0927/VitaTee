export const apps = {
  state: [],
  reducers: {
    add(state, payload) {
      return [...state, payload]
    }
  }
}