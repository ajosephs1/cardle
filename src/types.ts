
// error state for select and form submit
export type ErrorState = {
    make: boolean;
    model: boolean;
    year: boolean;
  };

export  type ErrorStateKeys = "make" | "model" | "year"; // Union of valid keys