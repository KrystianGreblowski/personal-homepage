import { Wrapper, HeaderTitle, TitleText, TitleIcon } from "./styled";
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
      <ul>
        <li>test 1</li>
        <li>test 2</li>
        <li>test 3</li>
        <li>test 4</li>
        <li>test 5</li>
        <li>test 6</li>
        <li>test 7</li>
        <li>test 8</li>
        <li>test 9</li>
        <li>test 10</li>
        <li>test 11</li>
        <li>test 12</li>
        <li>test 13</li>
        <li>test 14</li>
        <li>test 15</li>
        <li>test 16</li>
      </ul>
    </Wrapper>
  );
};

export default List;
