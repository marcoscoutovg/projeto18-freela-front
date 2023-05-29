import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"


export default function FlightsPage() {

    const [flightsList, setFlightsList] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/flights:idCity`)
        .then((res) => {
            console.log(res.data)
            console.log("foi")
            setFlightsList(res.data)
        })
        .catch((err) => console.log("erro"))
    }, [])
    return (
        <>
            <Header>
                Viagens Alucinantes
            </Header>
            <FlightsPageContainer>
                <Sidebar>
                    <PriceMin>

                    </PriceMin>
                    <PriceMax>

                    </PriceMax>
                </Sidebar>

                <MainContainer>
                    <h1>Passagens para cidade</h1>
                    <FlightsList>

                    {flightsList.map(f => 
                        <FlightBox>
                            <Image></Image>
                            <InfoFlight>
                                <p>{f.departureDate}</p>
                                <p>{f.price}</p>
                                <p>{f.departureCity}</p>
                            </InfoFlight>
                        </FlightBox>)}
                        <FlightBox>
                            <Image></Image>
                            <InfoFlight>
                                <p>data</p>
                                <p>preço</p>
                                <p>local de partida</p>
                            </InfoFlight>
                        </FlightBox>

                        <FlightBox>
                            <Image></Image>
                            <InfoFlight>
                                <p>data</p>
                                <p>preço</p>
                                <p>local de partida</p>
                            </InfoFlight>
                        </FlightBox>

                        <FlightBox>
                            <Image></Image>
                            <InfoFlight>
                                <p>data</p>
                                <p>preço</p>
                                <p>local de partida</p>
                            </InfoFlight>
                        </FlightBox>

                        <FlightBox>
                            <Image></Image>
                            <InfoFlight>
                                <p>data</p>
                                <p>preço</p>
                                <p>local de partida</p>
                            </InfoFlight>
                        </FlightBox>

                        <FlightBox>
                            <Image></Image>
                            <InfoFlight>
                                <p>data</p>
                                <p>preço</p>
                                <p>local de partida</p>
                            </InfoFlight>
                        </FlightBox>

                        <FlightBox>
                            <Image></Image>
                            <InfoFlight>
                                <p>data</p>
                                <p>preço</p>
                                <p>local de partida</p>
                            </InfoFlight>
                        </FlightBox>

                        <FlightBox>
                            <Image></Image>
                            <InfoFlight>
                                <p>data</p>
                                <p>preço</p>
                                <p>local de partida</p>
                            </InfoFlight>
                        </FlightBox>

                        <FlightBox>
                            <Image></Image>
                            <InfoFlight>
                                <p>data</p>
                                <p>preço</p>
                                <p>local de partida</p>
                            </InfoFlight>
                        </FlightBox>
                    </FlightsList>
                </MainContainer>
            </FlightsPageContainer>
        </>
    )
}

const FlightsPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: red;
    display: flex;
    align-items: center;
`

const Header = styled.header`
    width: 100vw;
    height: 100px;
    background-color: blue;
    display: flex;
`

const Sidebar = styled.div`
    width: 200px;
    height: 100vh;
    background-color: pink;
    display: flex;
    flex-direction: column;
`

const PriceMax = styled.div`
    width: 100%;
    height: 100px;
    background-color: yellow;
    display: flex;
`

const PriceMin = styled.div`
    width: 100%;
    height: 100px;
    background-color: gray;
    display: flex;
`

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: purple;
    display: flex;
    flex-direction: column;

    h1 {
        background: white;
        height: 100px;
        text-align: center;
    }
`

const FlightsList = styled.div`
    width: 100%;
    height: auto;
    background-color: green;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
`

const FlightBox = styled.div`
    width: 250px;
    height: 250px;
    background-color: brown;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 50px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    background-color: lightgray;
`

const InfoFlight = styled.div`
    width: 100%;
    height: 30%;
    background-color: lightgreen;
    display: flex;
    flex-direction: column;
`