import React from 'react'

function Recipe({ title, calories, image, ingredients, url }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>{Math.round(calories)} Calories </p>
      <ol>
        {ingredients.map((ingredient: { text: string }, index: number) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{url}</p>
    </div>
  )
}

export default Recipe