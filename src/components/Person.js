import {Button} from './Button'

const Person = ({name, number, id, onClickDeletePerson}) => {
  return (
    <div style={{display: 'flex', gap: '15px', padding: '5px 0'}}>
      {name} {number}{' '}
      <Button label='delete' onClick={() => onClickDeletePerson(id)} />
    </div>
  )
}

export {Person}
