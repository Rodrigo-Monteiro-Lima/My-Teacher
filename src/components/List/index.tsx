import { Button } from "@mui/material"
import { Description, EmptyList, Image, Info, ListItem, ListStyled, Name, Value } from "./List.styled"
import { ListProps } from "../../@types/listProps";

const List = ({teacher}: ListProps) => {
  return (
   <div>
    {teacher.length > 0 ? (
      <ListStyled>
        {teacher.map(({id, name, description, hourly_pay, image}) => (
          <ListItem key={id}>
            <Image src={image} alt={name}/>
            <Info>
              <Name>{name}</Name>
              <Value>{hourly_pay.toLocaleString('pt-Br', { minimumFractionDigits: 2, style: 'currency', currency: "BRL" })} por hora</Value>
              <Description>{description}</Description>
              <Button sx={{width: '70%'}}>Marcar Aula com {name}</Button>
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