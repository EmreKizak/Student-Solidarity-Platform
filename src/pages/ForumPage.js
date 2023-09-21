import React from 'react'
import { withLayout } from '../partials/Layout'
import styled from 'styled-components';
import { FormHeaderList } from '../components/FormHeaderList';
import { FormContentList } from '../components/FormContentList';

export const StyledForumPage = styled.div`
  body {
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  
  
}

header {
  background-color:black;
}

header,
footer {
  flex: none;
  padding: 1em;
}

.kapsayici {
  
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
}
.iceri-alani {
  background-color: rgba(254, 255, 233, 0.30);
  font-family: 'Poppins', sans-serif;
}
.menu,
.reklam {
  
  padding: 1em;
  background: rgba(254, 255, 233, 0.30);
}
.menu {
  font-family: 'Poppins', sans-serif;
  cursor:pointer;
  order: -1;
  background-color: rgba(254, 255, 233, 0.40);
}

@media (min-width: 768px) {
  .kapsayici {
    flex-direction: row;
  }
  .iceri-alani {
    flex: 1;
    padding: 20px;
    margin: 0;
  }
  .menu, .reklam {
    flex: 0 0 12em;
  }
}

`;

const ForumPage = () => {
  return (
    <StyledForumPage>
      <header></header>
      <div class="kapsayici">
        <main class="iceri-alani">
          <FormContentList />
        </main>
        <nav class="menu"><FormHeaderList />
          
        </nav>
        
      </div>

    </StyledForumPage>
  )
}
export default withLayout(ForumPage);
