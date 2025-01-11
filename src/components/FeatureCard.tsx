import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  text-align: left;
  color: #242a38;
  padding: 1rem;
`;

const CardImage = styled.img`
  width: 150px;
  padding: 1.5rem;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const CardDescription = styled.p`
  color: #717788;
  font-size: 1rem;
`;
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card>
      <CardImage width={150} height={150} src={icon} alt="feature1" />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
