import { nanoid } from "nanoid";
import {
  Wrapper,
  HeaderTitle,
  TitleText,
  TitleIcon,
  StyledList,
  ListItem,
} from "./styled";

const List = ({ titleText, titleIcon, listItems }) => {
  return (
    <Wrapper>
      <HeaderTitle>
        <TitleText>{titleText}</TitleText>
        <TitleIcon>{titleIcon}</TitleIcon>
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
