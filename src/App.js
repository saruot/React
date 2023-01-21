import './App.scss';
import { useState } from 'react';

function App() {
  const [Weight, setWeight] = useState(0);
  const [Bottles, setBottles] = useState(0);
  const [Time, setTime] = useState(0);
  const [Gender, setGender] = useState(0);
  const [Outcome, setOutcome] = useState(0);

  function calculateAlcohol(e){
    e.preventDefault();
    let litres = Bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = Weight / 10;
    let gramsLeft = grams - (burning * Time)

    if (Gender === ''){
      alert('Please check one of the gender boxes.')
    } 
    else if (Weight === 0)    {
      alert('Please enter your weight.')
    }
    else if ((gramsLeft / (Weight * 0.7)) < 0 ) {
      setOutcome(0);
    }
    else if (Gender === 'male'){
      setOutcome(gramsLeft / (Weight * 0.7))
    } 
    else {
      setOutcome(gramsLeft / (Weight * 0.6))
    }
  };
  
  return (
    <div id='base'>
      
   
    <form>
    <h1> Calculating blood alcohol level</h1>
      <div>
      <label htmlFor=""> Weight </label>
      <input type="number" value={Weight} onInput={e => setWeight(e.target.value)}/>
      </div>
      <div>
      <label htmlFor=""> Bottles </label>
      <select name="bottles" value={Bottles} onInput={e=> setBottles(e.target.value)} id="">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
      </select>
      </div>
      <div>
      <label htmlFor="">Time </label>
      <select name="bottles" value={Time} onInput={e => setTime(e.target.value)} >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
      </select>
      </div>
      <div>
      <label htmlFor="">Gender </label>
      <input type="radio" name='gender' value='male' onInput={e => setGender(e.target.value)}/> <label htmlFor=""> Male </label>
      <input type="radio" name='gender' value='female'onInput={e => setGender(e.target.value)}/>  <label htmlFor=""> Female </label>
      </div>
      <div>
        <output>{Outcome.toFixed(2)}</output>
      </div>
      <div>
      <button onClick={calculateAlcohol}> Calculate </button>
      </div>
    </form>
    </div>
  );
}

export default App;
