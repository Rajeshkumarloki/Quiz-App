import React, { useContext } from 'react';
import { MyContext } from '../Context';
import "./Result.css";
const Result = () => {
    let [data] = useContext(MyContext)
    console.log(data)
    return (
        <div>
            {
                data.map((ele, i) => {
                    return (
                        <div className='result' key={i}>

                            <p>{ele.question}</p>
                            <div>
                                {ele.options.map((e) => {
                                    return (
                                        <div>
                                            <input type="radio" value={e} checked={ele.yourAnswer == e ? true : false} disabled />
                                            <label htmlFor="">{e}</label>
                                        </div>
                                    )
                                })}
                            </div>
                            <h5>correct answer:{ele.correctAnswer}</h5>
                            <h4>your answer:{ele.yourAnswer}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Result;