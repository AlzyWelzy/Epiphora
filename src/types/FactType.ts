export default interface FactType {
  id: number;
  text: string;
  source: string;
  category: string;
  votesInteresting: number;
  votesMindblowing: number;
  votesFalse: number;
  createdIn: number;
  [key: string]: string | number; // Allow only specific properties to be accessed using a string index
}
