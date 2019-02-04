import React from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import v4 from 'uuid'

const Category = (props) => {
  return (
    <Card
      key={v4()}
      header={<CardTitle key={v4()}
      image={props.cat.strCategoryThumb} />}
      title={props.cat.strCategory}
      actions={[<Button key={v4()}
        onClick={() => props.findRecipes(props.cat.strCategory)}
        waves='light'>Find Recipes</Button>]}>
      {props.cat.strCategoryDescription}
    </Card>
  )
}

export default Category
