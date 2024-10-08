import { useState } from "react";
import styled from "styled-components";
import TopicCard from "../components/TopicCard";
import {
  CardProps,
  htmlCSSCard,
  javascriptCard,
  reactCard,
  netWorkCard,
  osCard,
  dataStructureCard,
  cloudAndDeployCard,
  securityCard,
  architectureCard,
} from "../types/data";
import GridBox from "../layout/GridBox";
import Modal from "../layout/Modal";

const SelectSection = styled.section`
  padding: 2rem;
  color: #242a38;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin-top: 90px;
  margin-bottom: 2rem;
  font-weight: 700;
  color: black;
  text-align: center;
`;

const SelectTopic = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardProps>(javascriptCard);

  const openModal = (card: CardProps) => {
    setSelectedCard(card);
    setOpen(true);
  };
  const closeModal = () => {
    setSelectedCard(javascriptCard);
    setOpen(false);
  };

  return (
    <>
      <SelectSection>
        <Title>퀴즈 주제 선택</Title>
        <GridBox>
          <TopicCard card={htmlCSSCard} openModal={openModal} />
          <TopicCard card={javascriptCard} openModal={openModal} />
          <TopicCard card={reactCard} openModal={openModal} />
          <TopicCard card={netWorkCard} openModal={openModal} />
          <TopicCard card={osCard} openModal={openModal} />
          <TopicCard card={dataStructureCard} openModal={openModal} />
          <TopicCard card={cloudAndDeployCard} openModal={openModal} />
          <TopicCard card={securityCard} openModal={openModal} />
          <TopicCard card={architectureCard} openModal={openModal} />
        </GridBox>
        {isOpen ? <Modal card={selectedCard} closeModal={closeModal} /> : ""}
      </SelectSection>
    </>
  );
};

export default SelectTopic;
