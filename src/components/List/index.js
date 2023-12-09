import {
  Wrapper,
  HeaderTitle,
  TitleText,
  TitleIcon,
  StyledList,
  ListItem,
} from "./styled";
import { ReactComponent as ToolIcon } from "../../images/tool.svg";

const List = () => {
  return (
    <Wrapper>
      <HeaderTitle>
        <TitleText>My skillset includes</TitleText>
        <TitleIcon>
          <ToolIcon />
        </TitleIcon>
      </HeaderTitle>
      <StyledList>
        <ListItem>test 1</ListItem>
        <ListItem>test 2</ListItem>
        <ListItem>test 3</ListItem>
        <ListItem>test 4</ListItem>
        <ListItem>test 5</ListItem>
        <ListItem>test 6</ListItem>
        <ListItem>test 7</ListItem>
        <ListItem>test 8</ListItem>
        <ListItem>test 9</ListItem>
        <ListItem>test 10</ListItem>
        <ListItem>test 11</ListItem>
        <ListItem>test 12</ListItem>
        <ListItem>test 13</ListItem>
        <ListItem>test 14</ListItem>
        <ListItem>test 15</ListItem>
        <ListItem>test 16</ListItem>
      </StyledList>
    </Wrapper>
  );
};

export default List;
