import React, { useState, useEffect } from 'react';
// import Elements from '../Elements/Elements';
import Start from '../Start/Start';
import Bingo from '../Bingo/Bingo';
import AddNumber from '../AddNumber/AddNumber';
import Modal from '../Modal/Modal';

import '../../assets/main.scss';

const dimension = 4;

//所有可連線類型
const lines = () => {
    const lineArr = [],
        dimensionArr = new Array(dimension).fill('');
    for (let i = 0; i < dimension; i++) {
        //橫線
        const row = dimensionArr.map((element, index) => (
                index + dimension * i
            )),
            //直線
            col = dimensionArr.map((element, index) => (
                index * dimension + i
            ));
        lineArr.push(row);
        lineArr.push(col);
    }
    //斜線
    const slash1 = dimensionArr.map((element, index) => (
            index + dimension * index
        )),
        slash2 = dimensionArr.map((element, index) => (
            (dimension - 1) * (index + 1)
        ));
    lineArr.push(slash1);
    lineArr.push(slash2);
    return lineArr
}

const winLines = lines();

const App = () => {
    const [resultNum, setResultNum] = useState(''),
        [start, setStart] = useState(false),
        [win, setWin] = useState(0),
        [numbers, setNumbers] = useState(new Array(dimension * dimension).fill('')),
        [results, setResults] = useState([]);

    //隨機產生亂數
    const handleRandom = () => {
        const ranNums = generateNums(dimension * dimension);
        return setNumbers(ranNums);
    }

    const generateNums = (max) => {
        const numsArr = numbers.map((element, index) => (
            index + 1
        ));
        for (let i = numsArr.length - 1; i > 0; i--) {
            //陣列亂數則一
            const ranIndex = Math.floor(Math.random() * (i + 1)),
                x = numsArr[i];
            numsArr[i] = numsArr[ranIndex];
            //最後一張跟陣列亂數 位子對調
            numsArr[ranIndex] = x;
        }
        return numsArr;
    }

    const handleInputChange = (e) => setResultNum(Number(e.target.value));

    //將已選數字加入 result array
    const addResults = () => {
        if (resultNum > 0 && resultNum <= (dimension * dimension) && !results.includes(resultNum)) {
            const resultArr = [...results, resultNum];
            return (
                setResults(resultArr)
            );
        }
    }

    //檢查是否連線
    useEffect(() => {
        const resultsIndex = results.map((result) => (
            numbers.indexOf(result)
        ))
        const checkLines = winLines.map((winLine) => (
            !winLine.map((lines) => (
                resultsIndex.includes(lines)
            )).includes(false)
        )).filter(line => (line === true)).length;
        return setWin(checkLines);
    }, [results])

    //重新開始 state 重設
    const gameStart = () => {
        handleRandom();
        setStart(true);
        setResults([]);
        setResultNum('');
        setWin(0);
    }

    return (
        <div>
          <Modal
          win={win}
          gameStart={gameStart}
          />
          <div className="container">
              <Start
              btnText={ start ? "restart" : "start" }
              btnOnClick={gameStart}
              />
              <Bingo
              dimension={dimension}
              numbers={numbers} 
              results={results}
              />
              <AddNumber
              start={start}
              dimension={dimension}
              resultNum={resultNum}
              handleInputChange={handleInputChange}
              addResults={addResults}
              results={results}
              btnOnClick={addResults}
              btnText="add number"
              />
          </div>
        </div>
    )
}
export default App;