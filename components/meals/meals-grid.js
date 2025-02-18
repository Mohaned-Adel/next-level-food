import styles from "./meals-grid.module.css";
import MealItem from "./meal-item";

export default function MealsGrid({ meals }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </ul>
  );
}
