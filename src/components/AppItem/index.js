// Write your code here
const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails
  return (
    <>
      <li className="app-item-container">
        <img className="app-image" src={imageUrl} alt={appName} />
        <p>{appName}</p>
      </li>
    </>
  )
}

export default AppItem
