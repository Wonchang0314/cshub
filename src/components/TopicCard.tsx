import styled from "styled-components";
import { TopicCardProps } from "../types/data";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    border: 2px solid lightgray;
    margin: -2px;
  }
`;

const CardImage = styled.img`
  width: 120px;
  height: 120px;
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

const TopicCard = ({ card, openModal }: TopicCardProps) => {
  return (
    <Card
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => openModal(card)}
    >
      <CardImage src={card.img} alt={card.topic} />
      <CardContent>
        <CardTitle>{card.topic}</CardTitle>
        <CardDescription>{card.content}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default TopicCard;
