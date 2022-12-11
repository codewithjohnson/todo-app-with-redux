const initialState = {
  status: "all",
};

export const todosStatusFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO statusChanged": {
    }
    default:
      return state;
  }
};
