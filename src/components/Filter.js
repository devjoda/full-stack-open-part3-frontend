import {FormInput} from './FormInput'

const Filter = ({label, filter, onChange}) => {
  return <FormInput label={label} value={filter} onChange={onChange} />
}

export {Filter}
