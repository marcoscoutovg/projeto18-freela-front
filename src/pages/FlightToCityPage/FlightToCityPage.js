import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function FlightToCityPage() {

    const [flight, setFlight] = useState()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/flights/:id`)
        .then((res) => {
            console.log(res.data)
            console.log("foi")
            setFlight(res.data)
        })
        .catch((err) => console.log("não foi"))
    }, [])

    return (
        <>
            <Header>
                <h1>Viagens Alucinantes</h1>
                <h2>VOLTAR</h2>
            </Header>

            <MainFlight>

                <h1>Passagem para cidade</h1>

                <FlightToCityInfo>
                    <p>Cidade de Destino: Cidade</p>
                    <p>Cidade de Origem: Cidade</p>
                    <p>Companhia Aérea: nome</p>
                    <p>Horário de Partida: hora</p>
                    <p>Horário previsto de Chegada: hora</p>
                    <p>Preço da passagem: preço</p>
                </FlightToCityInfo>

            </MainFlight>
        </>
    )
}

const Header = styled.header`
    width: 100vw;
    height: 100px;
    background-color: blue;
    display: flex;
    justify-content: space-between;
`

const MainFlight = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: red;
    display: flex;
    flex-direction: column;

    h1{
        text-align: center;
    }

`

const FlightToCityInfo = styled.div`
    width: 100vw;
    height: auto;
    background-color: blue;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding: 10px;
    

    p{
        margin-top: 20px;
    }
`
