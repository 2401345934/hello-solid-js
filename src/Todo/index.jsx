
import { createSignal, Index} from  "solid-js"
export default () => {
  const [inputVal,setInputVal] = createSignal('')
  const [todoList,setTodoList] = createSignal([
    {
      title:"2022"
    },
    {
      title:"2042"
    },
    {
      title:"2032"
    }
  ])


  const handleClick = () => {
    if(!inputVal().trim()) return
    setTodoList([
      {
        title:inputVal()
      },
      ...todoList(),
    ])
    setInputVal('')
  }

  const handleChange = (e) => {

    setInputVal(e.target.value)
  }
  return (
    <div>

      <h1>Todo List - solid-js</h1>

      <input type="text" value={inputVal()} onChange={handleChange}  />
      <button onClick={handleClick}>添加</button>
      <For
        each={todoList()}
      >
        {(item) =><>
          <div>任务：{item.title}</div>
        </>}
      </For>

    </div>
  )
}