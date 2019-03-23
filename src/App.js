import React, {Component} from "react";
import styled from "styled-components";
import "./App.css";

/* Stateless Component */
const Header = ({title}) => {
  return (
    <header>
      <div className="wrapper-header">
        <HeaderApps>{title}</HeaderApps>
      </div>
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
  background-color: lightgreen;
  border-radius: 5px;
`;

const Content = styled.div``;

const ContentWrapper = styled.div`
  margin: 10px;
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
`;

const ChatBubbleArea = styled.div`
  height: 70%;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #efefef;
`;

const ChatBubbleAreaWrapper = styled.div`
  padding: 20px;
`;

const ChatBubble = styled.div``;

const BubbleRight = styled.div`
  background-color: red;
`;

const BubbleLeft = styled.div`
  background-color: blue;
`;

const BubbleWrapper = styled.div``;

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
  text-align: center;
  color: red;
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
                        <div className="chat__bubble bubble-right">
                          <div className="chat-bubble__wrapper">
                            <BubbleChat msg="ini chat kanan" pos="right" />
                          </div>
                        </div>
                        <div className="chat__bubble bubble-left">
                          <div className="chat-bubble__wrapper">
                            <BubbleChat msg="ini chat Kiri" pos="left" />
                          </div>
                        </div>
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
