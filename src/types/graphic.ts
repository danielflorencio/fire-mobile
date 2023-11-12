export type LineChartGraphic = {
    // labels: Date[],
    // totalBalance: number[];
    labels: string[]
    datasets: DataSet[]
}

type DataSet = {
    data: number[],
    strokeWidth: number, 
    color: string 
}

// datasets: [
//     {
//         data: [1, 7, 6],
//         strokeWidth: 2,
//         color: (opacity = 1) => `rgba(255,0,0,${opacity})`, // optional
//     },