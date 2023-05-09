import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([]);

  useEffect( () => {

    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err.message))

  }, []);

  const handleSubmit = event => {

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json' 
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newUser = [...users, data];
        setUsers(newUser);
        form.reset();
      })
      .catch(err => console.log(err.message))
  
  }

  return (
    <>
      <div>
        <h1>Bismillahir Rahmanir Rahim</h1>
        <h5>ML-11-Module-67</h5>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name= "name" placeholder='name'/> <br/><br/>
            <input type="email" name= "email" placeholder='email'/> <br/><br/>
            <input type='submit' value="submit"/>
          </form>
        </div>
        <div>
          <h5>Total User: {users.length}</h5>
          {
            users.map(e => <p key={e.id}>{e.id}) {e.name}: {e.email}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
