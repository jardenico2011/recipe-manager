import { useState } from "react";
import { useSearchMeals } from "@/features/meals/meals.hooks";
import { useSavedRecipes } from "@/features/recipes/recipes.hooks";
import SearchBar from "@/components/SearchBar";
import MealCard from "@/components/MealCard";

export default function SearchPage() {
  const [term, setTerm] = useState("");
  const search = useSearchMeals(term);
  const { create, savedMealIds } = useSavedRecipes();

  const results = search.data ?? [];

  return (
    <div className="space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Find Recipes</h1>
        <p className="text-base-content/70 mt-2">
          Search TheMealDB and save the meals you like.
        </p>
      </header>

      <SearchBar onSearch={setTerm} />

      <section className="space-y-3">
        {search.isLoading && (
          <div className="text-center py-8">
            <span className="loading loading-spinner loading-lg" />
          </div>
        )}

        {search.isError && (
          <div className="alert alert-error">
            <span>Could not reach TheMealDB. Check your connection.</span>
          </div>
        )}

        {!search.isLoading && term && results.length === 0 && (
          <div className="text-center py-8 text-base-content/60">
            No meals found for &ldquo;{term}&rdquo;. Try another word.
          </div>
        )}

        {results.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {results.map((meal) => (
              <MealCard
                key={meal.mealId}
                meal={meal}
                onSave={create.mutate}
                isSaved={savedMealIds.has(meal.mealId)}
                isSaving={
                  create.isPending &&
                  create.variables?.mealId === meal.mealId
                }
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}