//Write a program for calculating Body mass index with weight in ks and height in centimeter

const calculateBmi = (weight: number, height: number) => {
    const bmi = weight / (height / 100) ** 2;
    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi < 25) {
        console.log("Normal (healthy weight)");
    } else if (bmi < 30) {
        console.log("Overweight");
    } else {
        console.log("Obese");
    }
}

calculateBmi(59, 183);