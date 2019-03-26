import React, {Component} from "react";
import styled from "styled-components";
import "./App.css";

/* Stateless Component */
const Header = ({title}) => {
  return (
    <header>
      <WrapperHeader>
        <HeaderApps>{title}</HeaderApps>
      </WrapperHeader>
    </header>
  );
};

const BubbleChat = ({msg, pos}) => {
  let BubblePos =
    pos === "left" ? (
      <BubbleLeft>{msg}</BubbleLeft>
    ) : (
      <BubbleRight>{msg}</BubbleRight>
    );
  return BubblePos;
};

const Footer = () => {
  return (
    <footer>
      <div className="wrapper-footer">
        <small>Apps By ConsciousnessDev</small>
      </div>
    </footer>
  );
};

/* Functional Components */

/* Styled Components */

const Pages = styled.div``;

const WindowWrapper = styled.div`
  margin: 0 auto;
  width: 60%;
  background-color: #efefef;
  border-radius: 5px;
`;

const Content = styled.div``;

const ContentWrapper = styled.div`
  margin: 10px;
`;

const WrapperHeader = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const ContentChat = styled.div`
  background-color: lightblue;
  width: 80%;
  margin: 0 auto;
  border-radius: 5px;
  padding: 20px;
`;

const ContentChatWrapper = styled.div`
  height: 400px;
  padding: 10px;
  overflow: hidden;
`;

const ChatBubbleArea = styled.div`
  height: 70%;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #efefef;
`;

const ChatBubbleAreaWrapper = styled.div`
  height: 100%;
  display: grid;
  align-content: end;
  overflow-x: hidden;
`;

const ChatBubble = styled.div``;

const BubbleRight = styled.div`
  grid-column: 2;
  align-self: center;
  background-color: red;
`;

const BubbleLeft = styled.div`
  grid-column: 1;
  align-self: center;
  background-color: blue;
`;

const BubbleWrapper = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(50px, auto);
  padding: 5px;
`;

const ChatActionArea = styled.div`
  height: 30%;
  width: auto;
  display: flex;
  align-items: center;
`;

const ChatActionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const ButtonChatLeft = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonLeft = styled.button`
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

const TextareaChat = styled.div`
  width: 60%;
  height: 100%;
`;

const TextAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TextAreaInput = styled.textarea`
  height: 100%;
  width: 95%;
  resize: none;
`;

const ButtonChatRight = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonRight = styled.button`
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

const HeaderApps = styled.h2`
  margin: 0;
  text-align: center;
  color: #6a6d7e;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pages>
          <WindowWrapper>
            <Content>
              <ContentWrapper>
                <Header title="SelfChat Apps v0.1" />
                <ContentChat>
                  <ContentChatWrapper>
                    <ChatBubbleArea>
                      <ChatBubbleAreaWrapper>
                        <ChatBubble>
                          <BubbleWrapper>
                            <BubbleChat msg="ini chat kanan" pos="right" />
                          </BubbleWrapper>
                        </ChatBubble>
                        <ChatBubble>
                          <BubbleWrapper>
                            <BubbleChat msg="ini chat Kiri" pos="left" />
                          </BubbleWrapper>
                        </ChatBubble>
                        <ChatBubble>
                          <BubbleWrapper>
                            <BubbleChat msg="ini chat kiri" pos="left" />
                          </BubbleWrapper>
                        </ChatBubble>
                        <ChatBubble>
                          <BubbleWrapper>
                            <BubbleChat msg="ini chat kiri" pos="left" />
                          </BubbleWrapper>
                        </ChatBubble>
                        <ChatBubble>
                          <BubbleWrapper>
                            <BubbleChat msg="ini chat kiri" pos="left" />
                          </BubbleWrapper>
                        </ChatBubble>
                        <ChatBubble>
                          <BubbleWrapper>
                            <BubbleChat msg="ini chat kiri" pos="left" />
                          </BubbleWrapper>
                        </ChatBubble>
                      </ChatBubbleAreaWrapper>
                    </ChatBubbleArea>
                    <ChatActionArea>
                      <ChatActionWrapper>
                        <ButtonChatLeft>
                          <ButtonLeft>{"Send Left"}</ButtonLeft>
                        </ButtonChatLeft>
                        <TextareaChat>
                          <TextAreaWrapper>
                            <TextAreaInput />
                          </TextAreaWrapper>
                        </TextareaChat>
                        <ButtonChatRight>
                          <ButtonRight>{"Send Right"}</ButtonRight>
                        </ButtonChatRight>
                      </ChatActionWrapper>
                    </ChatActionArea>
                  </ContentChatWrapper>
                </ContentChat>
                <Footer />
              </ContentWrapper>
            </Content>
          </WindowWrapper>
        </Pages>
      </div>
    );
  }
}

export default App;
