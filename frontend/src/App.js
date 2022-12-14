
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

import { Container, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'



/* 
  ๐ฆ๐ฆc6. ๋ฆฌ์กํธํด๋์์ Git ์ญ์ ํ๊ธฐ, ์์ํด๋์ Git์ค์นํ๊ธฐ

  git์ญ์ ํ๊ธฐ
  rm -rf .git 


  ๐ฆ๐ฆc7. List Products. data binding. map(~)
  ๐ data.js
  ๐ index.css
  ๐ HomeScreens.js

  frontendํด๋์์ผ๋ก ๋ค์ด๊ฐ ํ, npm start   


  ๐ฆ๐ฆc8. Add Routing, router-dom, URL parameter, useParams, Link to=
   ๐ HomeScreens.js
   ๐ ProductScreen.js


   ๐
    router-dom
    URL parameter
    useParams
    Link to="~~"

    ๐ <Route path="/product/:slug"

    ๐Link to="~~" 
      a href="~~~ ๐ Link to="~~"  : ํ์ด์ง ๋ฐ๋๋ loading์์ด ํ ํ์ด์ง์์์ ๋ค์ด๋๋ฏนํ๊ฒ ์ด๋ํจ

      react๋ 1๊ฐ์ ํ์ด์ง์์ ์๋ํ๋๊ฒ.
      page refreshํ๋ฉด ์๋๋๊ฒ์
      Link to= ํ๊ทธ๋ฅผ ํ์ฉํ์


    ๐ฆ๐ฆc9. Node.JS Server, Create backend API - type: module, express, nodemon, -D flag, dev_Dependencies, scripts

      backendํด๋ ์ด๋ ํ
      npm init

      ์ถ๊ฐ type : module 
      ์์ผ๋ก require๋ฅผ ์ฌ์ฉ์ํ๊ณ , ES6๋ฌธ๋ฒ import๋ฅผ ์ฌ์ฉํ ๊ฒ์ด๋ฏ๋ก...

      create server.js
      npm i express

      backendํด๋์ ( server.js์ ๊ฐ์ ํด๋)์ ๋ณต์ฌ-๋ถ์ฌ๋ฃ๊ธฐ
      backend์ ๋ณต๋ถํ data.js์ ํ

      node server.js

      JSON Viewer์ค์น
      JSON ์ ๋ฆฌํด์ฃผ๋ extension


      npm install nodemon -D
      -D : ๊ฐ๋ฐ์์ ์ฉ์ผ๋ก ์ค์น
      dev_Dependencies ํญ๋ชฉ์ ์ค์น๋๊ฒ ํ์ธ๋จ

      'scripts'์์ ์ถ๊ฐํ๋ ์ฝ๋~~~๋ 
      npm ~~~ ๋ฐฉ์์ผ๋ก 
      ๋ช๋ น์ด๋ฅผ ๋ง๋๋๊ฒ ๊ฐ์
      ์๋ nodemon ์คํ ๋ช๋ น์ด๋ nodemon server.js


    ๐ฆ๐ฆc10. Fetch Products From Backend
       ๐ frontend/package.json      
       ๐ frontend/../HomeScreen.js
  
      ๐"proxy": "http://localhost:5000",  

      ๐axios

    
    ๐ฆ๐ฆc11. useReducer, use reducer logger ๋ผ์ด๋ธ๋ฌ๋ฆฌ - Manage State By Reducer Hooks
     ๐ HomeScreens.js


  

      ๐
      ๐
      backend/ server.js๋ ์คํ์ค์ด์ด์ผ ํจ
      backend์์, frontend์์ ๋ชจ๋ npm start


      ๐
      loading ?   ๐ loading

      loading๋๋๊ณ , error ? ๐ error

      loading๋๋๊ณ , error์์ผ๋ฉด ? ๐ product.map(~) ๋ณด์ฌ์ค



    ๐ฆ๐ฆc12. react-bootstrap,react-router-bootstrap - Add Bootstrap
    

    ๐ฆ๐ฆc13. bootstrap - Product, Rating Component
    ๐/screens/homeScreen.js
    ๐/components/Product.js
    ๐/components/Rating.js
    ๐/public/index.html
    
    
    ๐ฆ๐ฆc14. conditional rendering, npm react-helmet-async, Product Screen
      ๐backend/server.js
      ๐frontend/src/App.js      
      ๐frontend/src/index.js
      ๐frontend/src/screens/HomeScreen.js
      ๐frontend/src/screens/ProductScreen.js

      ๐npm react-helmet-async
      ์นํ์ด์ง title์ ํ์ด์ง๋ง๋ค ์ค์ ํด์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ


    ๐ฆ๐ฆc15. utils.js, Loading and Message Component
      ๐frontend/src/screens/HomeScreen.js

      ๐
      error.response && error.response.data.message ์์ผ๋ฉด, 
      return error.response.data.message 

      or
      return error.message


*/

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className='site-container'>
          {/* ๐c8  Link to="~~" */}
            <Link to="/">kim's amazon</Link>
        </header>


        <main>
          <h3>App.js</h3>

          {/* ๐c8 router-dom
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

            {/*๐c8. a href={` ์ฃผ์`} ๊ทธ๋๋ก ์ฌ์ฉํจ.
              ํด๋ฆญํ๋ฉด route path='~~'์ slug ๋ค์ด๊ฐ๊ณ , 
              <ProductScreen/>์ผ๋ก ์ด๋ํจ */}
            <Route path="/product/:slug" element={<ProductScreen />}></Route>
          </Routes>

        </main>    

        <footer>
              Footer
        </footer>
      </div>
    </BrowserRouter>
  );
}



/* 
    ๐ฆ๐ฆc12. react-bootstrap,react-router-bootstrap - Add Bootstrap

    bootstrpa ์๋ฌ๋์ ์ ์ฉ์๋จ..
*/

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="d-flex flex-column site-container">
//         <header>
//           <Navbar bg="dark" variant="dark">
//             <Container>
//             {/* LinkContainer */}
//               <LinkContainer to="/">
//                 <Navbar.Brand>amazona</Navbar.Brand>
//               </LinkContainer>
//             </Container>
//           </Navbar>
//         </header>
//         <main>
//           {/* Container */}
//           <Container>
//             <Routes>
//               <Route path="/product/:slug" element={<ProductScreen />} />
//               <Route path="/" element={<HomeScreen />} />
//             </Routes>
//           </Container>
//         </main>
//         <footer>
//           <div className="text-center">All rights reserved</div>
//         </footer>
//       </div>
//     </BrowserRouter>
//   );
// }

export default App;
