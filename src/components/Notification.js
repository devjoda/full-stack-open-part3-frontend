const Notification = ({type, message}) => {
  return message ? (
    <div className={type === 'error' ? 'error-message' : 'success-message'}>
      {message}
    </div>
  ) : null
}

export {Notification}
