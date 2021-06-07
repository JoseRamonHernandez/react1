import React from 'react';
import styled from 'styled-components';
import './App.css';


const adminPage = () => {
    return ( <
        >
        <
        div class = "div1" >

        <
        Title >
        <
        h2 > ADMINISTRADOR < /h2> < /
        Title >
        <
        Navbar >
        <
        ul >
        <
        li > < a href = "" > Primer Etapa < /a></li >
        <
        li > < a href = "" > Segunda Etapa < /a></li >
        <
        li > < a href = "" > Tercer Etapa < /a></li >
        <
        li > < a href = "" > E1 2021 < /a></li >
        <
        /ul> < /
        Navbar >
        <
        /div>    <
        form >

        <
        input type = "text"
        size = "150"
        class = "redondeado"
        placeholder = "Nombre del Alumno o Carrera"
        name = "name" / >
        <
        /
        form >

        <
        center >
        <
        h1 class = "center" > Concentrado de calificaciones examen de admisión Primera etapa < /h1> <
        br / >
        <
        div class = "container" >

        <
        table class = "default" >

        <
        thead >
        <
        tr >

        <
        th > Nombre Completo < /th> <
        th > Carrera < /th>  <
        th > Correctas Pensamiento Matematico < /th> <
        th > Promedio Pensamiento Matematico < /th> <
        th > Correctas Pensamiento Analitico < /th> <
        th > Promedio Pensamiento Analitico < /th> <
        th > Correctas Estructura del Lenguaje < /th> <
        th > Promedio Estructura del Lenguaje < /th> <
        th > Correctas Comprensión Lectora < /th> <
        th > Promedio Comprensión Lectora < /th> <
        th > Promedio Total < /th>  < /
        tr > < /
        thead >

        <
        tbody >
        <
        tr >

        <
        td > Buscando Datos... < /td> <
        td > Buscando Datos... < /td> <
        td > Buscando Datos... < /td> <
        td > Buscando Datos... < /td> <
        td > Buscando Datos... < /td> <
        td > Buscando Datos... < /td> <
        td > Buscando Datos... < /td> <
        td > Buscando Datos... < /td> <
        td > Buscando Datos... < /td> <
        td > Buscando Datos... < /td> <
        td > Buscando Datos... < /td> 

        <
        /tr> < /
        tbody > <
        /table> < /
        div > <
        /
        center >

        <
        />
    );
}
const Title = styled.h2 `
    background: #1FBF17;
    color: #fff;
    font-size: 11px;
    padding: 8px;
`;

const Navbar = styled.nav `
    
    background: #1FBF17;
    .press{
        background: #c96100;
        color:#FFF;
    }
    ul{
        display: flex;
        justify-content: flex-start;
        li{
            list-style: none;
            padding: 8px;
            &:hover{
                background: #c96100;
            }
            a{
                display: inline-block;
                width: 100%;
                color: #ffff;
                text-decoration: none;
            }
        }
    }
`;

const form = styled.input `
background: red;
`;
export default adminPage;