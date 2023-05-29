import axios from "axios"
import styled from "styled-components"


export default function HotelPage() {
    return (
        <>
            <Header>
                <h1>Viagens Alucinantes</h1>
                <h2>VOLTAR</h2>
            </Header>
            <HotelContainer>
                <h1>Nome do Hotel</h1>
                <ImageContainer>
                    <Image></Image>
                    <Image></Image>
                    <Image></Image>
                    <Image></Image>
                    <Image></Image>
                    <Image></Image>
                </ImageContainer>
                <InfoHotel>
                    <Characteristics>
                        <li>Preço</li>
                       <li>Descrição</li>
                    </Characteristics>

                    <Commodities>
                        <li>Piscina</li>
                        <li>Café</li>
                    </Commodities>
                </InfoHotel>

            </HotelContainer>
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

const HotelContainer = styled.div`
    width: 100vw;
    height: auto;
    background-color: red;
    display: flex;
    flex-direction: column;
`

const ImageContainer = styled.div`
    width: 100vw;
    height: 200px;
    background-color: yellow;
    display: flex;
    margin-top: 100px;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    width: 10%;
    height: 90%;
    background-color: black;
    display: flex;
    margin-left: 10px;
`

const InfoHotel = styled.div`
    width: 100vw;
    height: auto;
    background-color: green;
    display: flex;
    justify-content: center;
    margin-top: 100px;
`

const Characteristics = styled.div`
    width: 40%;
    height: 400px;
    background-color: brown;
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
`

const Commodities = styled.div`
    width: 40%;
    height: 400px;
    background-color: brown;
    display: flex;
    flex-direction: column;
    padding: 20px;
`