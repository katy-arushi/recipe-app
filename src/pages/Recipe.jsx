import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("about");

  
  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(`
        https://api.spoonacular.com/recipes/${params.name}/information/?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();
      setDetails(detailData);
    };
    fetchDetails();
  }, [params.name]);

  return (
		<DetailWrapper>
			<div>
        <h2 style={{ textAlign: 'center', textDecoration: 'none' }}>{details.title}</h2>
        <img src={details.image} alt={details.title} style={{ borderRadius: '2rem' }}/>
			</div>
			<Info>
				<Button
					className={activeTab === 'about' ? 'active' : ""}
          onClick={() => setActiveTab('about')}
				>
					About
				</Button>
				<Button
					className={activeTab === 'instructions' ? 'active' : ""}
					onClick={() => setActiveTab('instructions')}
				>
					Instructions
				</Button>
				<Button
					className={activeTab === 'ingredients' ? 'active' : ""}
					onClick={() => setActiveTab('ingredients')}
				>
					Ingredients
				</Button>
				{activeTab === 'about' && (
					<div>
            <h2>About</h2>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
					</div>
				)}
				{activeTab === 'instructions' && (
					<div>
            <h2>Instructions</h2>
						<h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
					</div>
				)}
        {activeTab === 'ingredients' && (
          <div>
            <h2>Ingredients</h2>
            <ul>
              {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </div>
				)}
			</Info>
		</DetailWrapper>
	);
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background-image: linear-gradient(315deg, #006D77 0%, #83C5BE 95%);
    border-color: #00383D;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    padding-top: 2rem;
    text-decoration: underline;
  }

  li {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
    font-weight: 600;
  }

  h3 {
    text-decoration: none;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  border-radius: 2rem;
  font-size: 1rem;
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
`

const Info = styled.div`
  margin-left: 10rem;
`

export default Recipe;