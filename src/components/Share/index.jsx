import React from 'react';
import { ShareContainer, ItemContainer, Text, LocalShare } from "./styles";
import { AiFillInstagram, AiFillTwitterSquare, AiFillFacebook } from 'react-icons/ai';

const Share = () => {
  return (
    <ShareContainer>
      <Text>Compartilhe</Text>
      <ItemContainer>
        <LocalShare><AiFillInstagram /></LocalShare>
        <LocalShare><AiFillFacebook /></LocalShare>
        <LocalShare><AiFillTwitterSquare /></LocalShare>
      </ItemContainer>
    </ShareContainer>
  )
}

export { Share }