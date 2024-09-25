import styled from "styled-components";
import { TopicCardProps } from "../types/data";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  color: black;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    border: 2px solid #ff4d4d;
    margin: -2px;
  }
`;

const CardImage = styled.img`
  width: 50%;
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
  color: gray;
  font-size: 1rem;
`;

const TopicCard = ({ card, openModal }: TopicCardProps) => {
  return (
    <Card
      whileHover={{ scale: 1.04 }}
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
