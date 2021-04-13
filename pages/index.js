export default function Home() {

    return(
        <div>
            <h5>Hello World</h5>

            <Teste/>
        </div>
    )
}

function Teste() {
    return(
        <div>
            <h3>Já estamos em 2050?</h3>
            <button onClick={(e) => {alert('não')}}
            >Toque para descobrir</button>
        </div>
    )
}