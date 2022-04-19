const tom = BMI(8,9);
const jerry = BMI(45,10) 

function BMI(mass, height) {
    return (mass) / (Math.pow(height,2))
}

console.log(`Is Tom's BMI higher than Jerry's? ${tom > jerry}`);