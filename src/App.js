import React from 'react';
import { Header } from './app/components/Header/Header.jsx';
import MultiStepForm  from './app/components/Forms/MultiStepForm/MultiStepForm'

const steps = [{ id:"name", fields: ['firstName', 'lastName']}, { id: "address", fields: ['street', 'country', 'city', 'zip']}, { id:"contact", fields: ['email', 'mobile']}, { id: "review", fields: {}}, { id: "thankyou"}]


const data = {
  firstName: "George",
  lastName: "Michael",
  street: "Please stay",
  country: "Wham!",
  city: "Careless Whisper",
  zip: "90505",
  email: "george@lovesyou.com",
  mobile: "+61 4252 454 332" 
};

function App() {
  return (
    <>
      <Header />
      <MultiStepForm steps={steps} data={data}/>
    </>
  );
}

export default App;
