import { nanoid } from "nanoid";
import {
  Wrapper,
  HeaderTitle,
  Title,
  Icon,
  StyledList,
  ListItem,
} from "./styled";

const List = ({ titleText, titleIcon, listItems }) => {
  return (
    <Wrapper>
      <HeaderTitle>
        <Title>{titleText}</Title>

        <Icon>{titleIcon}</Icon>
      </HeaderTitle>

      <StyledList>
        {listItems.map((listItem) => (
          <ListItem key={nanoid()}>{listItem}</ListItem>
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default List;
