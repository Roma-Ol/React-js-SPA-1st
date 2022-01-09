import './app-info.css'

const AppInfo = (props) => {
  const {workers, workersToPromote} = props;

  return (
    <div className="app-info">
      <h2>Eployee encountant at our company</h2>
      <h2>Total amouth of workers: {workers}</h2>
      <h2>Total amout of promoted: {workersToPromote}</h2>
    </div>
  )
}

export default AppInfo;