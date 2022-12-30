const initialState = [
  { id: 1, todo: "get more office utils and", status: false, tag: "home" },
];

let nextID = 2;

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO/Added": {
      return [
        ...state,
        {
          id: nextID++,
          todo: action.payload.inputValue,
          status: false,
          tag: action.payload.inputTag,
        },
      ];
    }
    case "TODO updated": {
    }
    case "TODO toggled": {
    }
    case "TODO deleted": {
    }
    default:
      return state;
  }
};
