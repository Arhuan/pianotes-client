import { Typography } from 'antd';
import React from 'react';

import './AboutPage.css';

const { Title, Paragraph } = Typography;

function AboutPage() {
  return (
    <div className="about-page">
      <Title>about</Title>
      <Paragraph>
        Pianotes is a musical sheet typing/playing test, taking inspiration from
        other typing tests such as{' '}
        <a
          href="https://play.typeracer.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          TypeRacer
        </a>{' '}
        and{' '}
        <a
          href="https://monkeytype.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          MonkeyType
        </a>
        .
      </Paragraph>
      <Paragraph>
        In the many hours of practice we put into learning our respective
        instruments (ex. piano!), we spend days playing the same piece over and
        over until we perfect it. The repetition of the same piece is great for
        technique, however, beginners may find themselves memorizing patterns
        and pieces rather than bettering their ability to recognize notes on a
        musical sheet.
      </Paragraph>
      <Paragraph>
        The modern typing tests allows users to test their skill with their
        keyboards, seeing how quickly they can type words presented to them on
        the screen. Over time, users begin to get faster as they learn where to
        press on the keyboard when they see the letter <q>w</q>, <q>o</q>,{' '}
        <q>r</q>, <q>d</q> to spell out the word, <q>word</q>. The skill carries
        over when typing other words and it begins to become effortless.
        Pianotes leverages this idea to help users improve at their instruments
        (instead of a PC keyboard, it is a piano keyboard). Unlike a musical
        piece, pianotes will randomly generate notes allowing users to practice
        their ability to recognize notes on the fly and build up their skills to
        read and express themselves in musical notes.
      </Paragraph>
      <Title>credits</Title>
      <Paragraph>
        Icons used in bass/treble clef are made by{' '}
        <a
          href="https://www.flaticon.com/authors/freepik"
          target="_blank"
          rel="noreferrer noopener"
          title="Freepik"
        >
          Freepik
        </a>{' '}
        from{' '}
        <a
          href="https://www.flaticon.com/"
          target="_blank"
          rel="noreferrer noopener"
          title="Flaticon"
        >
          www.flaticon.com
        </a>
      </Paragraph>
    </div>
  );
}

export default AboutPage;
