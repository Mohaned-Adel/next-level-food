import React from 'react'

export default function MealDetailsPage({params}) {
    const {id} = params
  return (
    <main>
        <h1>Welcome to meal details page</h1>
        <p>{id}</p>
    </main>
  )
}
