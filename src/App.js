import React, {Component} from "react";
import styled from "styled-components";
import "./App.css";
// import data from "./sample_chat";

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

const ChatMessage = ({msg, pos}) => {
  let msgComponent = (
    <ChatBubble>
      <BubbleWrapper>
        <BubbleChat msg={msg} pos={pos} />
      </BubbleWrapper>
    </ChatBubble>
  );
  return msgComponent;
};

const BubbleChat = ({msg, pos}) => {
  let BubblePos =
    pos === "l" ? (
      <BubbleLeft>
        <ChatMsgWrapper>{msg}</ChatMsgWrapper>
      </BubbleLeft>
    ) : (
      <BubbleRight>
        <ChatMsgWrapper>{msg}</ChatMsgWrapper>
      </BubbleRight>
    );
  return BubblePos;
};

const ButtonChat = ({pos, label, act}) => {
  let ButtonGen =
    pos === "left" ? (
      <ButtonChatLeft pos={pos} onClick={act}>
        <ButtonLeft>{label}</ButtonLeft>
      </ButtonChatLeft>
    ) : (
      <ButtonChatRight pos={pos} onClick={act}>
        <ButtonRight>{label}</ButtonRight>
      </ButtonChatRight>
    );
  return ButtonGen;
};

const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        <small>
          Apps By{" "}
          <LinkFooter href="https://consciousnessdev.github.io">
            Consciousness Dev
          </LinkFooter>
        </small>
      </FooterWrapper>
    </footer>
  );
};

/* Functional Components */

/* Styled Components */

const Pages = styled.div``;

const WindowWrapper = styled.div`
  margin: 0 auto;
  background-color: #efefef;
  border-radius: 5px;
  @media only screen and (min-width: 400px) and (max-width: 650px) {
    width: 100%;
  }
  @media only screen and (min-width: 650px) and (max-width: 760px) {
    width: 80%;
  }
  @media only screen and (min-width: 760px) and (max-width: 999px) {
    width: 80%;
  }
  @media only screen and (min-width: 999px) and (max-width: 1280px) {
    width: 60%;
  }
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
  height: 75%;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #efefef;
`;

const ChatBubbleAreaWrapper = styled.div`
  height: 100%;
  display: grid;
  align-content: start;
  overflow: auto;
`;

const ChatBubble = styled.div`
  margin: 5px 0;
`;

const BubbleRight = styled.div`
  grid-column: 2;
  background-color: lightsalmon;
  border-radius: 5px;
  width: 90%;
  margin: 0 auto;
`;

const BubbleLeft = styled.div`
  grid-column: 1;
  background-color: lightgreen;
  border-radius: 5px;
  width: 90%;
  margin: 0 auto;
`;

const BubbleWrapper = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(50px, auto);
`;

const ChatMsgWrapper = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatActionArea = styled.div`
  height: 25%;
  width: auto;
  display: flex;
  align-items: center;
`;

const ChatActionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
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

const FooterWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const LinkFooter = styled.a`
  text-decoration: none;
  color: #0097e2;
  font-weight: bold;
  cursor: pointer;
`;

class App extends Component {
  constructor() {
    super();
    this.sendMsgChat = this.sendMsgChat.bind(this);
  }
  state = {
    chatMsg: {},
    position: "",
    chatAreaHeight: 0
  };

  sendMsg(event) {
    event.preventDefault();
    let dateGet = new Date();
    const date = {
      year: dateGet.getFullYear(),
      month: dateGet.getMonth(),
      day: dateGet.getDay(),
      get getFullDate() {
        return `${this.day}-${this.month}-${this.year}`;
      }
    };

    const time = {
      hour: dateGet.getHours(),
      minute: dateGet.getMinutes(),
      second: dateGet.getSeconds(),
      get getFullTime() {
        return `${this.hour}:${this.minute}:${this.second}`;
      }
    };

    const msgText = {
      date: date.getFullDate,
      time: time.getFullTime,
      msg: this.chatMsg.value,
      pos: this.state.position
    };

    this.sendMsgChat(msgText);
    this.chatArea.reset();
  }

  scrollToBottom = () => {
    if (this.chatBubble.scrollHeight > this.state.chatAreaHeight) {
      this.chatBubble.scrollTop = this.chatBubble.scrollHeight;
      this.setState({chatAreaHeight: this.chatBubble.scrollHeight});
    }
  };

  componentDidMount() {
    this.setState({chatAreaHeight: this.chatBubble.scrollHeight});
    console.log("Apps dimulai");
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  // sendLeft = (side, msg) => {};
  sendLeft = () => {
    this.setState({position: "l"});
  };

  sendRight = () => {
    this.setState({position: "r"});
  };

  sendMsgChat = msg => {
    const messages = {...this.state.chatMsg};
    const timestamp = Date.now();
    messages[`chat-${timestamp}`] = msg;
    this.setState({chatMsg: messages});
  };

  updateMsgChat = (key, updateMsgChat) => {
    const messages = {...this.state.chatMsg};
    messages[key] = updateMsgChat;
    this.setState({chatMsg: messages});
  };

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
                      <ChatBubbleAreaWrapper
                        ref={el => {
                          this.chatBubble = el;
                        }}
                      >
                        {Object.keys(this.state.chatMsg).map(key => (
                          <ChatMessage
                            key={key}
                            msg={this.state.chatMsg[key].msg}
                            pos={this.state.chatMsg[key].pos}
                          />
                        ))}
                      </ChatBubbleAreaWrapper>
                    </ChatBubbleArea>
                    <ChatActionArea>
                      <form
                        style={{width: "100%"}}
                        ref={input => {
                          this.chatArea = input;
                        }}
                        onSubmit={e => {
                          this.sendMsg(e);
                        }}
                      >
                        <ChatActionWrapper>
                          <ButtonChat
                            pos={"left"}
                            label={"Send Left"}
                            act={this.sendLeft}
                          />
                          <TextareaChat>
                            <TextAreaWrapper>
                              <textarea
                                style={{
                                  height: "100%",
                                  width: "95%",
                                  resize: "none"
                                }}
                                ref={input => (this.chatMsg = input)}
                                type="text"
                                placeholder="Fill message"
                                required="required"
                              />
                            </TextAreaWrapper>
                          </TextareaChat>
                          <ButtonChat
                            pos={"right"}
                            label={"Send Right"}
                            act={this.sendRight}
                          />
                        </ChatActionWrapper>
                      </form>
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
