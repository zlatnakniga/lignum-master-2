export default function WrapContainer({ children }) {
  return (
    <div className="container">
      <div className="row">
        <div className="xl:offset-1 xl:col-11">{children}</div>
      </div>
    </div>
  )
}
