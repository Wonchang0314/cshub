import styled from "styled-components";

const Bar = styled.svg`
  width: 100px;
  height: 100px;
`;

const Circle = styled.circle<{ $percent?: number }>`
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dasharray: 251.2;
  stroke-dashoffset: ${({ $percent = 100 }) =>
    251.2 - ($percent / 100) * 251.2};
  transition: stroke-dashoffset 0.35s;
  transform: rotate(90deg);
  transform-origin: 50% 50%;
`;
const Text = styled.text`
  font-size: 18px;
  fill: black;
`;

const RadialProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <Bar>
      <Circle cx="50" cy="50" r={40} stroke="lightgray" />
      <Circle cx="50" cy="50" r={40} stroke="#6f2dbd" $percent={percentage} />
      <Text x="50%" y="50%" textAnchor="middle" dy=".3em">
        {percentage}%
      </Text>
    </Bar>
  );
};

export default RadialProgressBar;
