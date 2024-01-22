import { Observer } from "./Observer";

export interface Observado {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}
