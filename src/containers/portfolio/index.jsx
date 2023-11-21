import React from 'react';
import { useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
// import ImageOne from '../../images/a.jpg';
// import ImageTwo from '../../images/b.jpg';
import ImageThree from '../../images/f.png';//live
import ImageFour from '../../images/s.png';//live
import ImageFive from '../../images/ft.png'; //live
// designs
import ImageSix from '../../images/designs/d1.png'; //design
import ImageSeven from '../../images/designs/d2.png';//design
import ImageEight from '../../images/designs/d3.png';//design
import ImageNine from '../../images/designs/d4.png';//design

import './style.scss'
const portfolioData = [

    {
        id: 2,
        name: "Mobile Application",
        image: ImageThree,
        link: '',
    },
    
    
    {
        id: 4,
        name: "Web Application",
        image: ImageNine,
        link: '',
    },{
      id: 2,
      name: "Mobile Application",
      image: ImageFour,
      link: '',
  },
    {
        id: 4,
        name: "Mobile App Design",
        image: ImageSix,
        link: '',
    },
    {
        id: 4,
        name: "Mobile App Design",
        image: ImageSeven,
        link: '',
    },
    {
        id: 4,
        name: "Mobile App Design",
        image: ImageEight,
        link: '',
    },{
      id: 2,
      name: "Mobile Application",
      image: ImageFive,
      link: '',
  },


]
// 2-mobile ... 3-web ... 4-mobile design


// filter data
const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Development'
    },
    {
        filterId: 3,
        label: 'Designs'
    }
]

// ...

const Portfolio = () => {
    const [filteredValue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);
  
    function handleFilter(currentId) {
      setFilteredValue(currentId);
    }
  
    function handleHover(index) {
      setHoveredValue(index);
    }
  
    console.log(hoveredValue);
  
    // Filter items based on the selected filter
    const filteredItems =
      filteredValue === 1
        ? portfolioData
        : portfolioData.filter((item) => item.id === filteredValue);
  
    return (
      <section id='portfolio' className='portfolio'>
        <PageHeaderContent
          headerText="My Portfolio"
          icon={<BsInfoCircleFill size={40} />}
        />
        {/* showing the labels and set on click event*/}
        <div className='portfolio_content'>
          <ul className='portfolio_content_filter'>
            {filterData.map((item) => (
              <li
                className={item.filterId === filteredValue ? 'active' : ''}
                onClick={() => handleFilter(item.filterId)}
                key={item.filterId}
              >
                {item.label}
              </li>
            ))}
          </ul>
          {/* setting up the images */}
          <div className='portfolio_content_cards'>
            {filteredItems.map((item, index) => (
              <div
                className='portfolio_content_cards_item'
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className='portfolio_content_cards_item_img-wrapper'>
                  <a>
                    <img alt="No image yet" src={item.image} />
                  </a>
                </div>
                <div className='overlay'></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
