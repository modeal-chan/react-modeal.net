import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ListWrapper = styled.ul`
    margin-top: 30px;
`

const Row = styled.li`
    width: 100%;
    height: 95px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    border-bottom: solid 1px #d7d7d7;
}
`
const Button = styled.button`
    border: none;
    outline: none;
    width: 140px;
    height: 50px;
    border-radius: 25px;
    background-color: #ebebeb;
    font-size: 20px;
    font-weight: 600;
    line-height: 50px;
    color: #2f1d69;
    cursor: pointer;
`
const ModelName = styled(Link)`
    font-size: 26px;
    font-family: "Noto Sans KR", sans-serif;
    letter-spacing: -1px;
    cursor: pointer;
`

function ListsSec() {
    const { C_CODE, M_CODE, L_CODE } = useParams();
    const [ list, setList ] = useState([]);
    useEffect(() => {
        axios
        .get(
            'http://localhost:8080/_interface/car/grd_option_select.php', {
            params: {
                L_CODE: `${L_CODE}`,
            }
            })
        .then(res => {
            setList(res.data.list)
        })
    }, [C_CODE, M_CODE, L_CODE]);
    return (
        <ListWrapper>
        {list.map((G_CODE, index) => {
            return (
                <Row key={index}>
                    <ModelName to={`/estimate/process/${C_CODE}/${M_CODE}/${L_CODE}/${G_CODE}`}>
                        {G_CODE.G_NAME}
                        {G_CODE.M_AMT}
                    </ModelName>
                    <Button>상세보기 &gt;</Button>
                </Row>
                )
            })}
        </ListWrapper>
    );
}

export default ListsSec
