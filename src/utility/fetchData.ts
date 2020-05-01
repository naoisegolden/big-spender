import { Billionaire } from "../store/items/types";

export const fetchData = async (): Promise<Billionaire> => {
  try {
    const response = await fetch(
      "https://forbes400.herokuapp.com/api/forbes400?limit=10"
    );
    const data = await response.json();
    const billionaires = data.map(
      (billionaire: {
        person: { name: string; squareImage: string };
        estWorthPrev: number;
        bios: string[];
      }) => {
        return {
          name: billionaire.person.name,
          totalMoney: billionaire.estWorthPrev * 1000000,
          introduction: billionaire.bios[0],
          imageSrc: `https:${billionaire.person.squareImage}`,
        };
      }
    );
    return billionaires;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return error;
  }
};
