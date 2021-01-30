import { Type } from "./type.model";

export interface Attack {
  name: string;
  type: Type;
  category: Category;
  power: number;
  accuracy: number;
  PowerPoints: number;
}

export interface Image {
  default: string;
  front: string;
  back: string;
}

export type Progress = {
  current: number;
  total: number;
};

export interface HP extends Progress {}

export interface PP extends Progress {}

export type Category = "Special" | "Physical";
