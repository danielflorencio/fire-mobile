import { Graphic } from "../types/graphic";

export const calculateGraphicData = (expensesData: any): Graphic => {
    let dailyTotalBalance: number[] = [];
    dailyTotalBalance.push(expensesData.values[0]);
    for(let i = 1; i < expensesData.values.length; i++){
      dailyTotalBalance.push(dailyTotalBalance[i - 1] + expensesData.values[i]);
    }
    const newGraphicsDataState: Graphic = {labels: expensesData.labels, totalBalance: dailyTotalBalance};
    return newGraphicsDataState;
}