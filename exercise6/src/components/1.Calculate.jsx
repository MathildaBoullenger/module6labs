import { useState } from "react";
import { Add } from "./2.Add";
import { Multiply } from "./2.Multiply";
import { Sub } from "./2.Substract";
import { Divide } from "./2.Divide";
import "./CalculatorStyles.css"


export const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operator, setOperator] = useState("+");
    const [result, setResult] = useState("");
    const [isCalculated, setIsCalculated] = useState(false);

    const handleCalculation = (e) => {
        e.preventDefault();

        let calculationResult;

        if (operator === "+") {
            calculationResult = <Add num1={num1} num2={num2} />;
        } else if (operator === "*") {
            calculationResult = <Multiply num1={num1} num2={num2} />;
        } else if (operator === "-") {
            calculationResult = <Sub num1={num1} num2={num2} />;
        } else if (operator === "/") {
            calculationResult = <Divide num1={num1} num2={num2} />;
        }

        setResult(calculationResult);
        setIsCalculated(true);
    };

    const handleReset = () => {
        setNum1("");
        setNum2("");
        setOperator("+");
        setResult("");
        setIsCalculated(false);
    };

    return (

        <div className="calculator">
            <form>
                <div className="First Number componentBox">
                    <label>
                        First Number
                        <input type="number" value={num1} name="num1" onChange={(e) => setNum1(e.target.value)}>
                        </input>
                    </label>
                </div>

                <div className="Operator componentBox">
                    <label>
                        Operator
                        <select value={operator} name="operator" onChange={(e) => setOperator(e.target.value)}>
                            <option value="+">+</option>
                            <option value="*">*</option>
                            <option value="-">-</option>
                            <option value="/">/</option>
                        </select>
                    </label>
                </div>

                <div className="Second Number componentBox">
                    <label>
                        Second Number
                        <input type="number" value={num2} name="num2" onChange={(e) => setNum2(e.target.value)}>
                        </input>
                    </label>
                </div>

                <div>
                    <button onClick={handleCalculation}>Calculate</button>
                </div>

                <div>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </form>

            <div className="Result componentBox">
                {isCalculated && (
                    <p value="result" name="result"> Result = {result}</p>
                )}
            </div>

        </div> 
        
       
    );
    
};
