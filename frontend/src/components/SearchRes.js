import React from 'react';
import './HomePage.css';
import Navbar from './Navbar';
import SearchItem from './SearchItem';

const ArrayofSearchItems = [
  {
    id: '123',
    name: 'Trees',
    image: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
    description: 'want to find and intership that allows you to plant trees, make gs and smoke trees?'
  },
  {
    id: '123',
    name: 'Trees',
    image: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
    description: 'want to find and intership that allows you to plant trees, make gs and smoke trees?'
  },
  {
    id: '123',
    name: 'Trees',
    image: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
    description: 'want to find and intership that allows you to plant trees, make gs and smoke trees?'
  },
  {
    id: '123',
    name: 'Trees',
    image: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
    description: 'want to find and intership that allows you to plant trees, make gs and smoke trees?'
  },
  {
    id: '123',
    name: 'Trees',
    image: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
    description: 'want to find and intership that allows you to plant trees, make gs and smoke trees?'
  },
  {
    id: '123',
    name: 'Trees',
    image: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
    description: 'want to find and intership that allows you to plant trees, make gs and smoke trees?'
  },
  {
    id: '123',
    name: 'hio',
    image: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
    description: 'helo'
  },
  {
    id: '123',
    name: 'helo',
    image: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
    description: 'helo'
  },
  {
    id: '123',
    name: 'helo',
    image: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
    description: 'helo'
  }
];

const SearchRes = (props) => {
  return (
    <div className="respage">
      <Navbar />
      {ArrayofSearchItems.map((item) => (
        <SearchItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default SearchRes;