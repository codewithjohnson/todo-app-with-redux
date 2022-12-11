const initialState = [
  { id: 1, todo: "get more office utils", status: false, tag: "home" },
  { id: 2, todo: "buy a home on sea", status: false, tag: "personal" },
  { id: 3, todo: "visit mum and dad", status: false, tag: "work" },
  { id: 4, todo: "Visit a bomb mine", status: false, tag: "personal" },
];

const nextID = 5;

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO Added": {
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
