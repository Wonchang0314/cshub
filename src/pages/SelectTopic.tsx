import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
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
import Modal from "../layout/Modal";

const Title = styled.h2`
  font-size: 2rem;
  margin-top: 90px;
  margin-bottom: 2rem;
  font-weight: 700;
  color: black;
  text-align: center;
`;

const CardGrid = styled.div`
  width: 70%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 100px;

  @media (max-width: 1280px) {
    width: 80%;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
      <section>
        <Title>퀴즈 주제 선택</Title>
        <CardGrid>
          <TopicCard card={htmlCSSCard} openModal={openModal} />
          <TopicCard card={javascriptCard} openModal={openModal} />
          <TopicCard card={reactCard} openModal={openModal} />
          <TopicCard card={netWorkCard} openModal={openModal} />
          <TopicCard card={osCard} openModal={openModal} />
          <TopicCard card={dataStructureCard} openModal={openModal} />
          <TopicCard card={cloudAndDeployCard} openModal={openModal} />
          <TopicCard card={securityCard} openModal={openModal} />
          <TopicCard card={architectureCard} openModal={openModal} />
        </CardGrid>
        {isOpen ? <Modal card={selectedCard} closeModal={closeModal} /> : ""}
      </section>
    </>
  );
};

export default SelectTopic;
