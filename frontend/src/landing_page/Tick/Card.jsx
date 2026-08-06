function Card({image, content, imageSize}) {
  return (
    <div className="card shadow-lg border-0 h-100" style={{width: "18rem",}} >
      <div className="card-body px-4 pb-5">
        <img src={image} alt="logo" className="my-2" style={{width:imageSize}}/>
        <hr />
        <p className="card-text text-muted pt-1 fw-medium " style={{fontSize:".75rem"}}>
          {content}
        </p>
      </div>
    </div>
  );
}

export default Card;
