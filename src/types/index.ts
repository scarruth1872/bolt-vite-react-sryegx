export interface Exercise {
  id: string;
  name: string;
  category: string;
  description: string;
  muscles: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  equipment: string[];
  instructions: string[];
  imageUrl?: string;
}

export interface Workout {
  id: string;
  name: string;
  exercises: {
    exerciseId: string;
    sets: number;
    reps: number;
    weight?: number;
  }[];
  duration: number;
  difficulty: string;
  userId: string;
  date: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  goals: string[];
  level: string;
  preferences: {
    workoutDays: string[];
    preferredExercises: string[];
  };
  stats: {
    weight: number;
    height: number;
    bmi: number;
  };
}