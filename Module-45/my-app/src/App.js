import React from 'react';
import Hero from './Components/Hero/Hero';

const App = () => {
  const persons = [
    {name: "Tusar", job: 'Frontend Developer', company: 'basecom'},
    {name: "Prinkal", job: 'UI Designer', company: 'basecom'},
    {name: "Setu Das", job: 'Trainee', company: 'basecom'},
    {name: "Aopo Roy", job: 'Frontend Developer', company: 'basecom'},
  ]
  
  return (
    <div className='container'>
      {
        persons.map(person => (
          <Hero name={person.name} job={person.job} company={person.company} />
        ))
      }
    </div>
  );
};

export default App;