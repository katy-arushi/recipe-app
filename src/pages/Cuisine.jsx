import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const check = localStorage.getItem(`cuisine ${name}`);

    if (check) {
      setCuisine(JSON.parse(check)); // get str from LS and parse to JSON
    } else {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian&cuisine=${name}`);
      const recipes = await data.json();
      localStorage.setItem(`cuisine ${name}`, JSON.stringify(recipes.results)); // set in LS
      setCuisine(recipes.results); // set state
    }
  };

  useEffect(() => {
    getCuisine(params.type)
  }, [params.type]); // run when params change

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  padding-top: 3rem;
`
const Card = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
  }
`

export default Cuisine;