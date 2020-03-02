import React, { useState, useEffect } from "react";

import { Container, Board, Card } from "./styles";

import DiceIcon from "../../images/cards/Dice.svg";
import LaptopIcon from "../../images/cards/Laptop.svg";
import NoteIcon from "../../images/cards/Note.svg";
import NoticeIcon from "../../images/cards/Notice.svg";

import BackCard from "../../images/back-card/javascript.svg";
import Refresh from "../../images/refresh/refresh.svg";

export default function Main() {
  const CARD_TYPES = [
    DiceIcon,
    DiceIcon,
    LaptopIcon,
    LaptopIcon,
    NoteIcon,
    NoteIcon,
    NoticeIcon,
    NoticeIcon
  ];
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState();
  const [secondCard, setSecondCard] = useState();

  useEffect(() => {
    shuffleCards();
  }, []);

  function shuffleCards() {
    const auxArray = [...CARD_TYPES];
    const auxCards = [];

    for (let i = auxArray.length; i > 0; i--) {
      let random = Math.floor(Math.random() * auxArray.length);
      auxCards.push({ type: auxArray[random], fliped: false, canFlip: true });
      auxArray.splice(random, 1);
    }

    setCards(auxCards);
  }

  function flipCard(willFlipCard) {
    willFlipCard.fliped = !willFlipCard.fliped;

    setCards(
      cards.map(card => {
        if (card === willFlipCard) {
          return (card = willFlipCard);
        } else {
          return card;
        }
      })
    );
  }

  function setCanFlip(cardGuess) {
    cardGuess.canFlip = false;

    setCards(
      cards.map(card => {
        if (card === cardGuess) {
          return (card = cardGuess);
        } else {
          return card;
        }
      })
    );
  }

  function onSuccessGuess() {
    setCanFlip(firstCard);
    setCanFlip(secondCard);
    setFirstCard();
    setSecondCard();
  }

  function onfailureGuess() {
    setTimeout(() => {
      flipCard(firstCard);
    }, 1000);
    setTimeout(() => {
      flipCard(secondCard);
    }, 1000);

    setFirstCard();
    setSecondCard();
  }

  function handleCardClick(card) {
    if (card === firstCard) return;
    flipCard(card);
    firstCard ? setSecondCard(card) : setFirstCard(card);
  }

  useEffect(() => {
    if (!firstCard || !secondCard) return;
    firstCard.type === secondCard.type ? onSuccessGuess() : onfailureGuess();
  }, [firstCard, secondCard]);

  return (
    <Container>
      <h1>Jogo da Memória</h1>
      <button onClick={shuffleCards}>
        <img src={Refresh} />
      </button>
      <Board>
        {cards.map((card, i) => (
          <Card
            key={i}
            fliped={card.fliped}
            onClick={card.canFlip ? () => handleCardClick(card) : null}
          >
            {!card.fliped ? <img src={BackCard} /> : <img src={card.type} />}
          </Card>
        ))}
      </Board>
    </Container>
  );
}
