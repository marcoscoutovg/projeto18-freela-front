import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
    const [citiesList, setCitiesList] = useState([]);
    const navigate = useNavigate();
    const [list, setList] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/cities`)
            .then((res) => {
                console.log(res.data)
                console.log('foi')
                setCitiesList(res.data)
            })
            .catch((err) => console.log("erro"))
    }, [])

    function listCities() {
        setList(true)
    }

    function pageFlight(idCity) {
        navigate(`/flights/${idCity}`)
    }

    return (
        <>
            <Header>
                <h1>Viagens Alucinantes</h1>
            </Header>
            <HomeContainer>
                <OptionsCities>
                    {list ? citiesList.map((c) =>
                        <Cities onCLick={() => pageFlight(c.id)}>
                            {c.name}
                        </Cities>) : <p onClick={listCities}>Selecionar cidade de destino</p>}
                </OptionsCities>

                <StepsContainer>
                    <Step>1. Escolha a cidade que deseja visitar</Step>
                    <Step>2. Veja as passagens disponíveis, com preços e datas</Step>
                    <Step>3. Veja os locais aonde você pode se hospedar e todo o conforto que eles te oferecem</Step>
                </StepsContainer>
            </HomeContainer>
        </>
    )
}

const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.header`
    width: 100vw;
    height: 100px;
    background-color: blue;
    display: flex;
`

const OptionsCities = styled.div`
    width: 1000px;
    height: auto;
    background-color: green;
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    justify-content: space-between;
`

const Cities = styled.div`
    width: 100%;
    height: auto;
    background-color: yellow;
    margin-top: 5px;
`

const ListCities = styled.div`
    width: 100%;
    height: auto;
    background-color: yellow;
    margin-top: 5px;
`

const StepsContainer = styled.div`
    width: 100vw;
    height: 200px;
    background-color: gray;
    display: flex;
    justify-content: center;
    margin-top: 200px;
`

const Step = styled.div`
    width: 200px;
    height: 200px;
    background-color: pink;
    display: flex;
    margin-left: 50px;
    justify-content: center;
    padding: 10px;
    font-size: 15px;
`