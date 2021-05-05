import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "../Meals/MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import axios from "axios";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      let res = null;
      try {
        res = await axios.get(
          "https://react-food-app-fc2de-default-rtdb.firebaseio.com/meals.json"
        );
        const loadedMeals = [];

        for (const key in res.data) {
          loadedMeals.push({
            id: key,
            name: res.data[key].name,
            description: res.data[key].description,
            price: res.data[key].price,
          });
        }

        setMeals(loadedMeals);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        if (error.request.status === 0) {
          setHttpError("Something went wrong!");
        }
      }
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p> LOADING...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsLoading}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
