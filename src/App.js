import { useState } from 'react';
import './App.css';
import contactsData from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(contactsData)
  const firstFive = contacts.slice(0, 5)
  console.log(firstFive)
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className='table-contacts'>
        <thead className='t-head'>
          <tr className='table-heading-row'>
            <th className='table-heading' >Picture</th>
            <th className='table-heading'>Name</th>
            <th className='table-heading'>Popularity</th>
            <th className='table-heading'>Won <br /> Oscar</th>
            <th className='table-heading'>Won <br /> Emmy</th>
          </tr>
        </thead>
        <tbody className='t-body'>
          {firstFive.map(el => {
            let roundedPopularity = el.popularity.toFixed(2)
            let oscarWon = el.wonOscar && <p>🏆</p>;
            let emmyWon = el.wonEmmy && <p>🏆</p>;

            return (
              <tr className='table-body-row'>
                <td id='picture-contact' className='table-body-data'>
                  <img src={el.pictureUrl} alt={el.name} width='100px' />
                </td>
                <td className='table-body-data'>
                  <p className='name-popu'> {el.name}</p>
                </td>
                <td className='table-body-data'>
                  <p className='name-popu'> {roundedPopularity}</p>
                </td>
                <td className='table-body-data'>
                  {oscarWon}
                </td>
                <td className='table-body-data'>
                  {emmyWon}
                </td>

              </tr>

            )

          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
