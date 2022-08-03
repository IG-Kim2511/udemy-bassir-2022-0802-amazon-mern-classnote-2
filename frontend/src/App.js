
import './App.css';
import data from './data';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomeScreen from './screens/HomeScreen';

/* 
  🦄🦄c6. 리액트폴더안의 Git 삭제하기, 상위폴더에 Git설치하기

  git삭제하기
  rm -rf .git 


  🦄🦄c7. List Products. data binding. map(~)
  👉 data.js
  👉 index.css

  frontend폴더안으로 들어간 후, npm start   


  🦄🦄c8. Add Routing, router-dom, URL parameter, useParams, Link to=

    router-dom
    URL parameter
    useParams
    Link to=

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
        </Routes>

          <h1> Featured Products</h1>

          <div className="products">
          
            {/* 🍀c7. ~.map(~) */}
            {
              data.data_products.map((p_product)=>(

                  // 🍀c7.  key={} : map()안의 첫번째 태그에 추가
                <div className="product" key={p_product.slug}>

                      {/*  🍀c7.  href={ `~~~`}
                        slug사용해서 address 세팅 */}
                  <a href={`/product/${p_product.slug}`}>.
                    <img src={p_product.image} alt={p_product.name}/>
                  </a>

                  <div className="product-info">
                    <a href={`/product/${p_product.slug}`}>
                      <p>{p_product.name}</p>
                    </a>
                      <p><strong>${p_product.price}</strong></p>    
                  </div>        
                </div>
              ))
            }
          </div>      
        </main>    
      </div>
    </BrowserRouter>
  );
}

export default App;
