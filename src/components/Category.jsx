import { FaPizzaSlice, FaHamburger, FaCheese } from 'react-icons/fa';
import { GiIndianPalace, GiChopsticks, GiGreekTemple, GiCookingPot } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
		<List>
			<SLink to={'/cuisine/american'}>
				<FaHamburger />
				<h4>American</h4>
			</SLink>
			<SLink to={'/cuisine/french'}>
        <FaCheese />
				<h4>French</h4>
			</SLink>
			<SLink to={'/cuisine/greek'}>
        <GiGreekTemple />
				<h4>Greek</h4>
			</SLink>
			<SLink to={'/cuisine/indian'}>
        <GiIndianPalace />
				<h4>Indian</h4>
			</SLink>
			<SLink to={'/cuisine/italian'}>
				<FaPizzaSlice />
				<h4>Italian</h4>
			</SLink>
			<SLink to={'/cuisine/japanese'}>
				<GiChopsticks />
				<h4>Japanese</h4>
			</SLink>
			<SLink to={'/cuisine/spanish'}>
        <GiCookingPot />
				<h4>Spanish</h4>
			</SLink>
		</List>
	);
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 1rem;
    padding-top: 0.5rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background-color: #2a2a72;
    background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`

export default Category;

