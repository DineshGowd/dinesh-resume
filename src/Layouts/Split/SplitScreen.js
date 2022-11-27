import styled from "styled-components";

const Container = styled.div`
  // border:1px solid grey;
  display: flex;
  flex-direction: ${props => props.fcdirection};
  margin: ${props => props.fcmargin};
  height: ${props => props.fcheight};
  border-radius: ${props => props.fborderradius};
`;

const Pane = styled.div`
  // border: 3px solid green;
  flex: ${props => props.weight};
  background-color: ${props => props.fpbcolor};
  border-radius: ${props => props.fpborderradius};

`;

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1, fcdirection = 'row', fcmargin = '0px', fcheight = 'auto', fpbrcolor="auto", fpblcolor="auto", fprborderradius='auto' ,fplborderradius='auto',fborderradius='auto' }) => {
  const [left, right] = children;
  return (
    <Container fcdirection={fcdirection} fcmargin={fcmargin} fcheight={fcheight} fborderradius={fborderradius}  >
      <Pane weight={leftWeight} fpbcolor={fpblcolor} fpborderradius={fprborderradius}>
        {left}
      </Pane>
      <Pane weight={rightWeight} fpbcolor={fpbrcolor} fpborderradius={fplborderradius}>
        {right}
      </Pane>
    </Container>
  );
};

export default SplitScreen;
