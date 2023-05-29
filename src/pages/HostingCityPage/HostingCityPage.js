import { useState } from "react"
import styled from "styled-components"


export default function HostingCityPage() {

    const [hotelsList, setHotelsList] = useState([])

    return (
        <>
            <Header>
                Viagens Alucinantes
            </Header>
            <HotelsPageContainer>
                <Sidebar>
                    <PriceMin>

                    </PriceMin>
                    <PriceMax>

                    </PriceMax>
                </Sidebar>

                <MainContainer>
                    <h1>Hospedagens em cidade</h1>
                    <HotelsList>

                    {hotelsList.map(f => 
                        <HotelBox>
                            <Image></Image>
                            <InfoHotel>
                                <p>{f.name}</p>
                                <p>{f.price}</p>
                            </InfoHotel>
                        </HotelBox>)}
                        <HotelBox>
                            <Image></Image>
                            <InfoHotel>
                                <p>nome</p>
                                <p>preço</p>
                            </InfoHotel>
                        </HotelBox>

                        <HotelBox>
                            <Image></Image>
                            <InfoHotel>
                                <p>nome</p>
                                <p>preço</p>
                            </InfoHotel>
                        </HotelBox>

                        <HotelBox>
                            <Image></Image>
                            <InfoHotel>
                                <p>nome</p>
                                <p>preço</p>
                            </InfoHotel>
                        </HotelBox>

                        <HotelBox>
                            <Image></Image>
                            <InfoHotel>
                                <p>nome</p>
                                <p>preço</p>
                            </InfoHotel>
                        </HotelBox>

                        <HotelBox>
                            <Image></Image>
                            <InfoHotel>
                                <p>nome</p>
                                <p>preço</p>
                            </InfoHotel>
                        </HotelBox>

                        <HotelBox>
                            <Image></Image>
                            <InfoHotel>
                                <p>nome</p>
                                <p>preço</p>
                            </InfoHotel>
                        </HotelBox>

                        <HotelBox>
                            <Image></Image>
                            <InfoHotel>
                                <p>nome</p>
                                <p>preço</p>
                            </InfoHotel>
                        </HotelBox>

                        <HotelBox>
                            <Image></Image>
                            <InfoHotel>
                                <p>nome</p>
                                <p>preço</p>
                            </InfoHotel>
                        </HotelBox>
                    </HotelsList>
                </MainContainer>
            </HotelsPageContainer>
        </>
    )
}

const HotelsPageContainer = styled.div`
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

const HotelsList = styled.div`
    width: 100%;
    height: auto;
    background-color: green;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
`

const HotelBox = styled.div`
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

const InfoHotel = styled.div`
    width: 100%;
    height: 30%;
    background-color: lightgreen;
    display: flex;
    flex-direction: column;
`