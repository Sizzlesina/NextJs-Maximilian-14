function MealDetailsPage({ params }) {
  return (
    <div>
      <h1>Melas Slug Page</h1>
      <p>{params.mealSlug}</p>
    </div>
  );
}

export default MealDetailsPage;
