const initialState =  [
        {id: "1", name: "John"},
        {id: "2", name: "Doe"}
    ]

const userList = (state = initialState, action) => {
    
    switch (action.type) {
      case 'ADD_USER':
        let newUsers = [...state, action.user]
        return newUsers;
      case 'EDIT_USER':
        return state.map((user)=>user.id === user.id ? {...user,editing:!user.editing}:user)
      default:
        return state
    }
  }

export default userList;
