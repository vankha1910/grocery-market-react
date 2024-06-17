import { ArrowDown, ArrowLeft, CartIcon, HeartIcon } from '~/assets'
import './navbar.scss'
const index = () => {
  // const navbarList = [
  //   {
  //     navItem: 'Departments',
  //     link: '#!',
  //     dropdown: {
  //       leftContent: {
  //         title: 'All Departments',
  //         icon: '',
  //         children: [
  //           {
  //             title: 'Savings & Featured Businesses',
  //             content: [
  //               {
  //                 icon: '',
  //                 title: 'Fashion Deals',
  //                 content: ['Clothing', ' Shoes', 'Accessories', 'Bags', '  Jewelry']
  //               },
  //               {
  //                 icon: '',
  //                 title: 'Electronics Discounts',
  //                 content: ['Smartphones', 'Laptops', 'Headphones', 'Cameras', 'Tablets', 'Speakers', 'Wearable Tech']
  //               }
  //             ]
  //           },
  //           {
  //             title: 'Electronics',
  //             content: [
  //               {
  //                 icon: '',
  //                 title: 'Fashion Deals',
  //                 content: ['Clothing', ' Shoes', 'Accessories', 'Bags', '  Jewelry']
  //               },
  //               {
  //                 icon: '',
  //                 title: 'Electronics Discounts',
  //                 content: ['Smartphones', 'Laptops', 'Headphones', 'Cameras', 'Tablets', 'Speakers', 'Wearable Tech']
  //               }
  //             ]
  //           },
  //           {
  //             title: 'Clothing, Shoes & Accessories',
  //             content: [
  //               {
  //                 icon: '',
  //                 title: 'Fashion Deals',
  //                 content: ['Clothing', ' Shoes', 'Accessories', 'Bags', '  Jewelry']
  //               },
  //               {
  //                 icon: '',
  //                 title: 'Electronics Discounts',
  //                 content: ['Smartphones', 'Laptops', 'Headphones', 'Cameras', 'Tablets', 'Speakers', 'Wearable Tech']
  //               }
  //             ]
  //           }
  //           // 'Home, Furniture & Appliances',
  //           // 'Toys & Video Games',
  //           // 'Home Improvement',
  //           // 'Baby',
  //           // 'Household Essentials',
  //           // 'Personal Care',
  //           // 'Patio & Garden',
  //           // 'Sports & Outdoors',
  //           // 'Gift Cards'
  //         ]
  //       }
  //     }
  //   },
  //   {
  //     title: 'Grocery',
  //     link: '#!',
  //     dropdown: {
  //       leftContent: null,
  //       content: [
  //         {
  //           title: 'Grocery',
  //           icon: '',
  //           content: ['Shop All', 'Grilling Foods', 'Spring Flavors']
  //         },
  //         {
  //           title: 'Fresh Produce',
  //           icon: '',
  //           content: ['Shop All', 'Grilling Foods', 'Spring Flavors']
  //         }
  //       ]
  //     }
  //   }
  // ]
  return (
    <>
      <nav id='navbar' className='navbar hide'>
        <button toggle-target='#navbar' className='navbar__close js-toggle d-none d-lg-block'>
          <img className='icon navbar__close-icon' src={ArrowLeft} alt='' />
        </button>
        <div className='d-none d-md-flex nav-act'>
          <a href='./checkout.html' className='nav-btn'>
            <img className='nav-btn__icon' src={CartIcon} alt='' />
            <span className='nav-btn__title'>Cart</span>
            <span className='nav-btn__qnt'>3</span>
          </a>
          <a href='./favorite.html' className='nav-btn'>
            <img className='nav-btn__icon' src={HeartIcon} alt='' />
            <span className='nav-btn__title'>Favorite</span>
            <span className='nav-btn__qnt'>3</span>
          </a>
        </div>
        <ul className='navbar__list js-dropdown-list'>
          <li className='navbar__item'>
            <a href='#!' className='navbar__link'>
              Departments <img src={ArrowDown} alt='' className='navbar__arrow' />
            </a>
          </li>
          <li className='navbar__item'>
            <a href='#!' className='navbar__link'>
              Grocery <img src={ArrowDown} alt='' className='navbar__arrow' />
            </a>
          </li>
          <li className='navbar__item'>
            <a href='#!' className='navbar__link'>
              Beauty <img src={ArrowDown} alt='' className='navbar__arrow' />
            </a>
          </li>
        </ul>
      </nav>
      <div className='navbar__overlay d-none d-lg-block' />
    </>
  )
}

export default index
