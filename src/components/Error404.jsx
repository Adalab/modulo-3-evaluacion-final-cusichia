import HP404 from "../images/HP_404Error.png"


function Error404() {
  return (
    <>
    <div className="error404">
      <img className="hp404" src={HP404} alt="Error 404: page not found" />
    </div>
    </>
  )
}

export default Error404
