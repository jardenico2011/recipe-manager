
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMeal } from "@/features/meals/meals.hooks";
import { useSavedRecipes } from "@/features/recipes/recipes.hooks";

export default function RecipeDetailPage() {
  const { mealId } = useParams();
  const navigate = useNavigate();
  const meal = useMeal(mealId);
  const { create, savedMealIds } = useSavedRecipes();

  const isSaved = meal.data
    ? savedMealIds.has(meal.data.mealId)
    : false;

  if (meal.isLoading) {
    return (
      <div className="text-center py-12">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (meal.isError) {
    return (
      <div className="alert alert-error">
        <span>Could not load this recipe. Please try again.</span>
      </div>
    );
  }

  if (!meal.data) {
    return (
      <div className="text-center space-y-4 py-12">
        <h1 className="text-3xl font-bold">No such recipe</h1>
        <p className="text-base-content/70">
          This recipe could not be found.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Search
        </Link>
      </div>
    );
  }

  const recipe = meal.data;

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-ghost btn-sm"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={recipe.thumb}
          alt={recipe.title}
          className="w-full rounded-xl object-cover"
        />

        <div className="space-y-4">
          <div>
            <span className="badge badge-primary">
              {recipe.category}
            </span>
            <h1 className="text-3xl font-bold mt-2">
              {recipe.title}
            </h1>
          </div>

          <button
            className="btn btn-primary"
            disabled={isSaved || create.isPending}
            onClick={() => create.mutate(recipe)}
          >
            {isSaved ? "Already Saved" : "Save Recipe"}
          </button>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
