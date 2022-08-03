
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
