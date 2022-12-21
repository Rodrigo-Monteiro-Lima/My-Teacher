import { Button } from "@mui/material"
import { Description, EmptyList, Image, Info, ListItem, ListStyled, Name, Value } from "./List.styled"
import { ListProps } from "../../@types/listProps";
import { FormatationService } from "../../services/FormatationService";

const List = ({teacher, onSelect}: ListProps) => {
  return (
   <div>
    {teacher.length > 0 ? (
      <ListStyled>
        {teacher.map((prof) => (
          <ListItem key={prof.id}>
            <Image src={prof.image} alt={prof.name}/>
            <Info>
              <Name>{prof.name}</Name>
              <Value>{FormatationService.monetaryValue(prof.hourly_pay)} por hora</Value>
              <Description>{FormatationService.TextLimiter(prof.description, 200)}</Description>
              <Button sx={{width: '70%'}} onClick={() => onSelect(prof)}>Marcar Aula com {prof.name}</Button>
            </Info>
          </ListItem>
          ))}
      </ListStyled>
    ) : (
      <EmptyList>Nenhum item foi encontrado</EmptyList>
    )}
   </div>
  )
}

export default List