
function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center">
    <div className="spinner-border loading" role="status" style={{width:"50px",height:"50px",marginTop:"50px"}}>
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  )
}

export default LoadingSpinner