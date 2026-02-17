export interface Subject {
  name: string;
  marks: number;
}

export interface Student {
  id: number;
  name: string;
  age?: number;
  gender?: string;
  subjects: Subject[];
  marks?: number; // optional legacy field
}
