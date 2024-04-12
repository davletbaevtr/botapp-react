import styled from 'styled-components';
import {DARK_BLUE} from '../../utils/colors'

const MyButton = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 21px 0;
    margin-left: 15px;
    margin-right: 15px;
    background-color: white;
    border-radius: 21px;
    color: ${DARK_BLUE};
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
`;

export default MyButton;