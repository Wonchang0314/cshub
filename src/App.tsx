import { Routes, Route } from "react-router-dom";
import { createGlobalStyle, styled } from "styled-components";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import SelectTopic from "./pages/SelectTopic";
import Quiz from "./pages/Quiz";
import Loading from "./pages/Loading";
import QuizResult from "./pages/QuizResult";
const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Paperlogy-8ExtraBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
}
  body {
    padding: 0;
    box-sizing: border-box;
    font-family: 'Paperlogy-8ExtraBold', sans-serif;
    color: white;
    text-decoration: none;
  }
  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    list-style: none;
    display: block
  }
  button {
    border: none;
    cursor: pointer;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<Layout />}>
              <Route path="/selectTopic" element={<SelectTopic />} />
              <Route path="/loading" element={<Loading />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/quiz/result" element={<QuizResult />} />
            </Route>
          </Routes>
        </MainContent>
      </AppContainer>
    </>
  );
}

export default App;
