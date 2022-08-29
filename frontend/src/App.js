
import './App.css';
// import data from './data';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

/* 
  🦄🦄c6. 리액트폴더안의 Git 삭제하기, 상위폴더에 Git설치하기

  git삭제하기
  rm -rf .git 


  🦄🦄c7. List Products. data binding. map(~)
  👉 data.js
  👉 index.css
  👉 HomeScreens.js

  frontend폴더안으로 들어간 후, npm start   


  🦄🦄c8. Add Routing, router-dom, URL parameter, useParams, Link to=
   👉 HomeScreens.js
   👉 ProductScreen.js


   🍀
    router-dom
    URL parameter
    useParams
    Link to="~~"

    🍀 <Route path="/product/:slug"

    🍀Link to="~~" 
      a href="~~~ 👉 Link to="~~"  : 페이지 바뀌는 loading없이 한 페이지안에서 다이나믹하게 이동함

      react는 1개의 페이지에서 작동하는것.
      page refresh하면 안되는것임
      Link to= 태그를 활용하자


    🦄🦄c9. Node.JS Server, Create backend API - type: module, express, nodemon, -D flag, dev_Dependencies, scripts

      backend폴더 이동 후
      npm init

      추가 type : module 
      앞으로 require를 사용안하고, ES6문법 import를 사용할것이므로...

      create server.js
      npm i express

      backend폴더안 ( server.js와 같은 폴더)에 복사-붙여넣기
      backend에 복붙한 data.js선택

      node server.js

      JSON Viewer설치
      JSON 정리해주는 extension


      npm install nodemon -D
      -D : 개발자전용으로 설치
      dev_Dependencies 항목에 설치된것 확인됨

      'scripts'안에 추가하는 코드~~~는 
      npm ~~~ 방식으로 
      명령어를 만드는것 같음
      원래 nodemon 실행 명령어는 nodemon server.js


    🦄🦄c10. Fetch Products From Backend
       👉 frontend/package.json      
       👉 frontend/../HomeScreen.js

      🍀"proxy": "http://localhost:5000",  

      🍀axios








*/

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>

        {/* 🍀c8  Link to="~~" */}
          <Link to="/">kim's amazon</Link>
        </header>

        <main>
          <h3>App.js</h3>

          {/* 🍀c8 router-dom
            <Routes>
              <Route path="/" element={<App />}>

                    <Route index element={<Home />} />

                    <Route path="teams" element={<Teams />}>
                          <Route path=":teamId" element={<Team />} />
                          <Route path="new" element={<NewTeamForm />} />
                          <Route index element={<LeagueStandings />} />
                    </Route>

              </Route>
            </Routes>
          */}

          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>

            {/*🍀c8. a href={` 주소`} 그대로 사용함.
              클릭하면 route path='~~'에 slug 들어가고, 
              <ProductScreen/>으로 이동함 */}
            <Route path="/product/:slug" element={<ProductScreen />}></Route>
          </Routes>

            
          

        
        </main>    
      </div>
    </BrowserRouter>
  );
}

export default App;
