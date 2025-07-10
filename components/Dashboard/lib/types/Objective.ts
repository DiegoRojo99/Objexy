export type Objective = {
  id: string;
  title: string;
  description: string;
  frequency: ObjectiveFrequency;
  frequencyNumber: number;
  tags: Tag[];
  createdAt: string;
};

export type ObjectiveFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

export type Tag = {
  id: string;
  name: string;
  color: string;
};
