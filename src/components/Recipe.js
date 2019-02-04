import React from 'react'
import { Card, CardTitle } from 'react-materialize'
import v4 from 'uuid'

const Recipe = (props) => {
  return (
    <Card
      key={v4()}
      header={<CardTitle key={v4()} image={props.recipe.strMealThumb} />}
      title={props.recipe.strMeal}
      onClick={() => props.handleClick(props.recipe.idMeal)}
    />
  )
}

export default Recipe
