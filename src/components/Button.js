const Button = ({label, type, onClick}) => {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {label}
      </button>
    </div>
  )
}

export {Button}
