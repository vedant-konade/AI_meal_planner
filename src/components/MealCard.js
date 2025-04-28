import React, { useState } from 'react';

function MealCard({ meal }) {
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    
    if (Math.abs(diff) > 50) {
      setSwipeDirection(diff > 0 ? 'right' : 'left');
    }
  };

  const handleTouchEnd = () => {
    if (swipeDirection === 'right') {
      console.log('Liked:', meal.name);
    } else if (swipeDirection === 'left') {
      console.log('Disliked:', meal.name);
    }
    setSwipeDirection(null);
  };

  return (
    <div 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        background: '#fff',
        width: '300px',
        height: '400px',
        padding: '20px',
        margin: '20px auto',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.1)',
        textAlign: 'center',
        transform: swipeDirection ? `translateX(${swipeDirection === 'right' ? '100px' : '-100px'})` : 'none',
        transition: 'transform 0.3s ease',
        cursor: 'grab'
      }}
    >
      <h3>{meal.name}</h3>
      <p>Calories: {meal.calories}</p>
      {meal.isEcoFriendly && <p style={{ color: "green" }}>🌱 Eco-Friendly</p>}
      <div style={{ marginTop: '20px' }}>
        <p>← Swipe left to dislike</p>
        <p>Swipe right to like →</p>
      </div>
    </div>
  );
}

export default MealCard;