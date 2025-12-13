import React from 'react'
import "./Quiz.css"
import { useContext } from 'react'
import { MyContext } from '../Context'
import { Link } from 'react-router-dom'


const Quiz = () => {
    let [data, setData, index, setIndex] = useContext(MyContext);

    let oneQuest = data[index];

    function handleInput(eve) {
        oneQuest.yourAnswer = eve.target.value;
        setData([...data]);
    }
    return (
        <div className='Quiz'>
            <header>
                <div>
                    <Link to="/">
                        <h5>userName</h5>
                    </Link>

                </div>
                <div>
                    <h5>Time</h5>
                </div>
            </header>
            <main>
                <div>{oneQuest.id}.{oneQuest.question}</div>
                <div>{oneQuest.options.map((e, i) => {
                    return <div key={i}>
                        <input type="radio" value={e} name='opt' onChange={handleInput} checked={oneQuest.yourAnswer == e ? true : false} />
                        <label htmlFor="">{e}</label>
                    </div>

                })}</div>
                <div>{data.map((e, i) => {
                    return <button key={e.id} onClick={() => {
                        setIndex(i)
                    }}>{e.id}</button>
                })}</div>
            </main>
            <footer>
                <div>

                    <button onClick={() => {
                        if (index > 0) {
                            setIndex(index - 1)
                        }
                    }

                    }>Prev Qn</button>

                    <button onClick={() => {
                        if (index < data.length - 1) {
                            setIndex(index + 1)
                        }
                    }

                    }>Next Qn</button>
                </div>
                <div>
                    <Link to="/result">
                        <button>Submit</button>
                    </Link>
                </div>
            </footer>
        </div>
    )
}

export default Quiz