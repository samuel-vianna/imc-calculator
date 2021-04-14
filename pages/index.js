// import styles from '../styles/global.css'

import { useState } from "react"

export default function Home() {

    return (
        <body id='container'>
            <h2>IMC CALCULATOR</h2>

            <Teste />

            <Footer/>
        </body>
    )
}

function Teste() {

    const [imc, setImc] = useState(0)

    return (
        <div>
            <form id='imc_form'>
                <div className='box_input'>
                    <h5>Height (cm)</h5>
                    <input type='number' id='height' />
                </div>
                <div className='box_input'>
                    <h5>Weight (kg)</h5>
                    <input type='number' id='weight' />
                </div>


            </form>

            <button onClick={(e) => {
                var h = document.getElementById("height").value;
                var w = document.getElementById("weight").value;

                if (h !== '' && w !== '') {
                    var aux = w / Math.pow(h / 100, 2);
                    setImc(aux.toFixed(2))
                } else {
                    alert('não foi possível calcular o IMC')
                }


            }}
            >Calculate</button>

            <div id='results'>
                <h3>Results</h3>
                <div className='box_result'>
                    <h4>Your IMC:</h4>
                    <h5>{imc}</h5>
                </div>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div id='footer'>
            <h5>Desenvolvido por Samuel Vianna Quintanilha</h5>
        </div>
    )
}