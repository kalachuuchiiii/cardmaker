import { months } from '../data/month.js';

export const dateFormatter = (date) => {
  const [year, month, day] = date.split("T")[0].split("-").map(Number);
  
  return `${months[month -1]} ${day}, ${year}`
}