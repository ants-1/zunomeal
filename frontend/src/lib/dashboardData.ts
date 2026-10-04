export interface Meal {
  type: string;
  name: string;
  calories: number;
}
export interface DashboardStat {
  label: string;
  value: string | number;
  description: string;
}

export const todaysMeals: Meal[] = [
  {
    type: "Breakfast",
    name: "Avocado Toast",
    calories: 420,
  },
  {
    type: "Lunch",
    name: "Chicken Rice Bowl",
    calories: 560,
  },
  {
    type: "Dinner",
    name: "Pasta Primavera",
    calories: 620,
  },
  {
    type: "Snacks",
    name: "Crisp",
    calories: 120,
  },
];

export const dashboardStats: DashboardStat[] = [
  {
    label: "Goal",
    value: "Eat healthier",
    description: "Focus on balanced meals this week.",
  },
  {
    label: "Meals planned",
    value: 12,
    description: "meals planned this week",
  },
  {
    label: "Recipes",
    value: 24,
    description: "recipes in your collection",
  },
];
