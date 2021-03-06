import { useState } from 'react'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = (shouldReset) => {
    if (shouldReset) {value.setValue('')}
  }

  return {
    value,
    type,
    onChange,
    reset
  }
}
