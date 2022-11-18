import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { Search as SearchIcon } from 'react-feather'
import {
  Label,
  IconWrapper,
  InputText
} from './styled'

interface SearchProps {
  defaultValue?: string
  onChange?: (value: string) => void
  onEnter?: (value: string) => void
}

const Search: React.FC<SearchProps> = ({
  defaultValue = '',
  onChange,
  onEnter
}) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    onChange?.(value)
  }, [onChange, value])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value
    setValue(value)
  }

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      onEnter?.(value)
    }
  }

  return (
    <Label>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <InputText
        type="text"
        placeholder="Search character..."
        onChange={handleChange}
        onKeyDown={handleKeyDown} />
    </Label>
  )
}

export default Search
