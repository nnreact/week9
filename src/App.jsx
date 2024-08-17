// import SettingsIcon from "./assets/icons/settings.svg"

import Card from "./components/Card"

function App() {
  return (
    <>

      <Card title descript>
        <p className="card-body-title">Card Body</p>
        <p className="card-body-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quod ducimus ullam magni modi illum pariatur a mollitia molestias sequi?</p>

      </Card>

      <Card>
        <p className="card-body-title">Card Body</p>
        <p className="card-body-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quod ducimus ullam magni modi illum pariatur a mollitia molestias sequi?</p>
        <div className="card-buttons">
          <button className="btn secondary">Click me!</button>
          <button className="btn primary">Click me!</button>
        </div>
      </Card>

    </>
  )
}

export default App
