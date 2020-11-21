const Message = ({ children, type = 'success' }) => {
  
  return (
    <div className={`message message--type--${type}`}>
      {children}
    </div>
  )
}

export default Message;
