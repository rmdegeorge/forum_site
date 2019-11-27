import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    border: solid black 1px
    text-align: center
    color: #bada55
    padding-top: 5px
    padding-bottom: 5px
    margin-bottom: 5px
    margin-top: 5px
`

function Card(props){
    return(
        <CardWrapper>
            <h4>{props.title}</h4>
        </CardWrapper>
    )
}

export default Card