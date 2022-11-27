import SplitScreen from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>I am {name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "blue" }}>{message}</h1>;
};

const Split = () => {
  return (
    <div>
      <SplitScreen rightWeight={3} leftWeight={1}>
        <LeftHandComponent name={"Dinesh"} />
        <RightHandComponent message={"I am Component"} />
      </SplitScreen>
    </div>
  );
};

export default Split;
