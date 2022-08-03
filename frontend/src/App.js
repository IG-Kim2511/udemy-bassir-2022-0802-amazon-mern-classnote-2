
import './App.css';
import data from './data';

/* 
  🦄🦄c6. 리액트폴더안의 Git 삭제하기, 상위폴더에 Git설치하기

  git삭제하기
  rm -rf .git 


  🦄🦄c7. List Products. data binding. map(~)
  👉data.js

  frontend폴더안으로 들어간 후, 

  npm start

*/
function App() {
  return (
    <div>
      <header>
        <a href="/">kim's amazon</a>
      </header>
      <main>
      <h1> Featured Products</h1>
      {/* 🍀c7 */}
      {
        data.data_products.map((p_product)=>(
          <div>
            <img src={p_product.image} alt={p_product.name}/>
            <p>{p_product.name}</p>
            <p>{p_product.price}</p>
            
          </div>


        ))
      }
      
      
      </main>
    
    </div>
  );
}

export default App;
