//Write a program for calculating Body mass index with weight in ks and height in centimeter

const calculateBmi = (weight: number, height: number) => {
    const bmi = weight / (height / 100) ** 2;
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal (healthy weight)";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
} 