import {FormInput} from './FormInput'
import {Button} from './Button'

const PersonForm = ({name, number, onSubmit, onChangeName, onChangeNumber}) => {
  return (
    <form onSubmit={onSubmit}>
      <FormInput label='Name' value={name} onChange={onChangeName} />
      <FormInput label='Number' value={number} onChange={onChangeNumber} />
      <Button label='add' type='submit' />
    </form>
  )
}

export {PersonForm}
