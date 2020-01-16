// import React, { useState } from 'react';
// import Input from '../Input/Input';
// import './Header.scss';

// const inputValueNames = {
//   address: 'address',
//   time: 'time',
//   search: 'search',
// };

// const Header = () => {
//   const [address, setAddress] = useState('');
//   const [time, setTime] = useState('');
//   const [search, setSearch] = useState('');

//   const handleInputChange = ({ target }) => {
//     switch (target.value) {
//       case inputValueNames.address:
//         return setAddress(target.value);

//       case inputValueNames.time:
//         return setTime(target.value);

//       case inputValueNames.search:
//         return setSearch(target.value);

//       default:
//         setAddress(target.value);
//     }
//   };

//   return (
//     <header className="header">
//       <div className="content">
//         <div className="header__inner">
//           <img src="./images/logo.svg" alt="Uber Eats" />
//           <div className="header__delivery-info">
//             <Input
//               name="address"
//               value={address}
//               onChange={handleInputChange}
//               placeholder="Address"
//               iconUrl="./images/place.svg"
//             />
//             <Input
//               name="time"
//               value={time}
//               onChange={handleInputChange}
//               placeholder="Time"
//               type="time"
//             />
//           </div>
//           <Input
//             name="search"
//             value={search}
//             onChange={handleInputChange}
//             placeholder="Search"
//             iconUrl="./images/search.svg"
//             className="header__search"
//           />
//           <a className="header__link" href="/sign-in">
//             Sign in
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
