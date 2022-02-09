import React from "react";
import {MainContainer} from "../HomePage/styles";
import {ContentWrapper, Title, TopTitle, TopTitleText, SimpleText, SimpleLink, Paragraph} from "./styles";
import {FirstTermsList, SecondTermsList} from "./mockData";
import {List} from "../List";
import {Seo} from "../Seo/Seo";

export const TermsPage: React.FC = () => {
  return (
    <>
      <Seo description={""} image={""} title={"Terms"} />
      <MainContainer>
        <TopTitle>
          <TopTitleText>Terms</TopTitleText>
        </TopTitle>
        <ContentWrapper>
          <Title>Welcome to Ventrickle</Title>
          <SimpleText>
            We firmli believe that the fight against preventing cardiovascular disease and metabolic syndrome has to be
            done with with as is mush flexibility as possible.
          </SimpleText>
          <SimpleText>
            We need to give clients and customers coise - and by presenting your business as one that is focused on
            health, while enjoying life is a strategy we know is proven to work from the{" "}
            <SimpleLink>scientific data.</SimpleLink>
          </SimpleText>
          <Paragraph>
            We firmli believe that the fight against preventing cardiovascular disease and metabolic syndrome has to be
            done with with as is mush flexibility as possible. We need to give clients and customers coise - and by
            presenting your business as one that is focused on health, while enjoying life is a strategy we know is
            proven to work from the scientific data.
          </Paragraph>
          <SimpleText>
            We firmli believe that the fight against preventing cardiovascular disease and metabolic syndrome has to be
            done with with as is mush flexibility as possible.
          </SimpleText>
          <SimpleText>
            We need to give clients and customers coise - and by presenting your business as one that is focused on
            health, while enjoying life is a strategy we know is proven to work from the scientific data.
          </SimpleText>
          <Paragraph>
            We firmli believe that the fight against preventing cardiovascular disease and metabolic syndrome has to be
            done with with as is mush flexibility as possible. We need to give clients and customers coise - and by
            presenting your business as one that is focused on health, while enjoying life is a strategy we know is
            proven to work from the scientific data.
          </Paragraph>
          <Title>Welcome to Ventrickle</Title>
          <SimpleText>
            We firmli believe that the fight against preventing cardiovascular disease and metabolic syndrome has to be
            done with with as is mush flexibility as possible.
          </SimpleText>
          <SimpleText>
            We need to give clients and customers coise - and by presenting your business as one that is focused on
            health, while enjoying life is a strategy we know is proven to work from the{" "}
            <SimpleLink>scientific data.</SimpleLink>
          </SimpleText>
          <List terms={FirstTermsList} />
          <Paragraph>
            We firmli believe that the fight against preventing cardiovascular disease and metabolic syndrome has to be
            done with with as is mush flexibility as possible. We need to give clients and
            <SimpleLink> customers coise</SimpleLink> - and by presenting your business as one that is focused on
            health, while enjoying life is a strategy we know is proven to work from the scientific data.
          </Paragraph>
          <List terms={SecondTermsList} arrows={true} />
        </ContentWrapper>
      </MainContainer>
    </>
  );
};
