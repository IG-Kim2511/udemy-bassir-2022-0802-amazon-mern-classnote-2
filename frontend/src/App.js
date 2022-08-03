
import './App.css';
import data from './data';

import {
  BrowserRouter,
  Routes,
  Route,
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


   🍀
    router-dom
    URL parameter
    useParams
    Link to=

    🍀 <Route path="/product/:slug"


    1 click home screen

    2. loading spin mark 확인됨


    react는 1개의 페이지에서 작동하는것.

    page refresh하면 안되는것임

    Link 태그를 활용하자


    Link is a component from React router dom
*/

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">kim's amazon</a>
        </header>
        <main>

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
