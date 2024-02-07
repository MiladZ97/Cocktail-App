import { css } from 'lit';
/* CocktailList */
export default css `
.cocktail-container {
    flex-flow: column;
    margin: 2rem;
    display: flex;
    gap: 1rem;
    width: 800px;
  }
  
  .cocktail-card {
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .cocktail-image {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  .image-container {
    margin-right: 2rem;
    margin-left: 2rem;
  }

  .cocktail-image {
    width: 100px;
    height: 100px; 
  } 
  
  .cocktail-details {
    padding: 15px;
  }
  
  .cocktail-title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .cocktail-instructions {
    margin: 10px 0;
  }
  
  .add-to-list-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .add-to-list-button:hover {
    background-color: #0056b3;
  }
`;
//# sourceMappingURL=styles.css.js.map