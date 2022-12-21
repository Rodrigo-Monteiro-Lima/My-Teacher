import {Teacher} from './teacher'

export interface ListProps {
  teacher: Teacher[],
  onSelect: (teacher: Teacher) => void,
}