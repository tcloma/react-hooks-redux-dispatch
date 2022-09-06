let state = { count: 0 };
let action = { type: "counter/increment" };

const changeState = (state, action) => {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const dispatch = (action) => {
  state = changeState(state, action)
  render()
  return state;
}

const statefulh1 = document.createElement('h1')
const render = () => {
  const app = document.querySelector('#app')
  statefulh1.textContent = state.count
  app.append(statefulh1)
}

const button = document.getElementById('inc')
inc.addEventListener('click', () => {
  dispatch(action).count
})

render()

// console.log('Count is: ',dispatch(action).count)
// console.log('Count is: ',dispatch(action).count)
// console.log('Count is: ',dispatch(action).count)