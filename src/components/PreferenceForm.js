import React, { useState } from 'react';
import axios from 'axios';
import MealCard from './MealCard';
import './PreferenceForm.css';  // We'll create this new CSS

function PreferenceForm() {
  const [mealType, setMealType] = useState('veg');
  const [calorieTarget, setCalorieTarget] = useState('300-500');
  const [allergies, setAllergies] = useState('');
  const [ecoFriendly, setEcoFriendly] = useState('yes');
  const [personalizedMeals, setPersonalizedMeals] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/personalizeMeals', {
        mealType,
        calorieTarget,
        allergies,
        ecoFriendly
      });
      setPersonalizedMeals(res.data);
    } catch (error) {
      console.error("Error fetching personalized meals:", error);
    }
  };

  return (
    <div className="preference-form-container">
      <form className="preference-form" onSubmit={handleSubmit}>
        <label>Meal Preference:</label>
        <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
          <option value="veg">Vegetarian</option>
          <option value="non-veg">Non-Vegetarian</option>
        </select>

        <label>Calorie Target:</label>
        <select value={calorieTarget} onChange={(e) => setCalorieTarget(e.target.value)}>
          <option value="<300">Less than 300</option>
          <option value="300-500">300–500</option>
          <option value=">500">More than 500</option>
        </select>

        <label>Any Allergies?</label>
        <input type="text" placeholder="e.g., nuts, dairy" value={allergies} onChange={(e) => setAllergies(e.target.value)} />

        <label>Prefer Eco-Friendly Meals?</label>
        <select value={ecoFriendly} onChange={(e) => setEcoFriendly(e.target.value)}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <button type="submit">Get My Personalized Meals! 🎯</button>
      </form>

      <div className="meals-section">
        <h3>Your Personalized Meal Plan 🎯</h3>
        {personalizedMeals.length > 0 ? (
          personalizedMeals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))
        ) : (
          <p>Fill the form and get personalized recommendations!</p>
        )}
      </div>
    </div>
  );
}

export default PreferenceForm;
