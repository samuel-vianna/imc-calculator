export default function Home() {

    return (
        <div id='main'>
            <h2>IMC CALCULATOR</h2>

            <Teste />
        </div>
    )
}

function Teste() {
    return (
        <div>
            <form>
                <div>
                    <h5>Height</h5>
                    <input />
                </div>
                <div>
                    <h5>Weight</h5>
                    <input />
                </div>

                <button>Calculate</button>
            </form>

            <div>
                <h3>Results</h3>
                <div>
                    <h5>Your IMC:</h5>
                    <h5>30</h5>
                </div>
            </div>
        </div>
    )
}