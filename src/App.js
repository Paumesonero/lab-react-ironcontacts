import { useState } from 'react';
import './App.css';
import contactsData from './contacts.json'

function App() {
  const contactsFive = contactsData.slice(0, 5)
  const [contacts, setContacts] = useState(contactsFive)
  console.log(contacts)
  const leftContacts = contactsData.slice(5);
  //console.log(leftContacts)

  const handleRandom = () => {
    //console.log(contacts)
    const randomContact = leftContacts[Math.floor(Math.random() * leftContacts.length)];
    //console.log(randomContact)
    const newArr = [...contacts]
    newArr.push(randomContact)
    //console.log(newArr)

    setContacts(newArr)
  }

  const handleSortPopularity = () => {
    const sortedPopularity = [...contacts].sort((a, b) => b.popularity - a.popularity)
    setContacts(sortedPopularity)
  }

  const handleSortName = () => {
    const sortedName = [...contacts].sort((a, b) => a.name.localeCompare(b.name))
    setContacts(sortedName)
  }

  const handleDelete = contactId => {
    const filterContact = contacts.filter(el => {
      return el.id !== contactId;
    })
    setContacts(filterContact);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className='btns-container'>
        <button onClick={handleRandom}> Add random contact</button>
        <button onClick={handleSortPopularity}>Sort by popularity</button>
        <button onClick={handleSortName}>Sort by name</button>
      </div>
      <table className='table-contacts'>
        <thead className='t-head'>
          <tr className='table-heading-row'>
            <th className='table-heading' >Picture</th>
            <th className='table-heading'>Name</th>
            <th className='table-heading'>Popularity</th>
            <th className='table-heading'>Won <br /> Oscar</th>
            <th className='table-heading'>Won <br /> Emmy</th>
            <th className='table-heading'>Actions</th>
          </tr>
        </thead>
        <tbody className='t-body'>
          {contacts.map(el => {
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
                <td className='table-body-data'>
                  <button className='delete-btn' onClick={() => handleDelete(el.id)}>Delete</button>
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
