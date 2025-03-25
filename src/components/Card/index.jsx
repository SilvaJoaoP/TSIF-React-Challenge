function Card({ children, ...props }) {
    return (
      <div className="card" style={{ border: "1px solid #ccc", padding: "10px" }}>
        <div {...props}>{children}</div>
      </div>
    );
  }
  
  export default Card;