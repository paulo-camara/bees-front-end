import styled from "styled-components";

interface TagPropsModel {
    value: string;
    icon: string;
    cursorPointer?: boolean;
};

export const Tag = ({ value, icon, cursorPointer }: TagPropsModel) => {
    return (
        <ContainerTag cursorPointer={cursorPointer}>
            <img src={icon} alt="Icon-tag"/>
            <span>{value}</span>
        </ContainerTag>
    )
};

interface ContainerTagModel {
    cursorPointer?: boolean;
};

const ContainerTag = styled.div<ContainerTagModel>`
    background-color: #f2ec54;
    padding: 8px;
    border-radius: 22px;
    font-size: 12px;
    cursor: ${props => props.cursorPointer ? "pointer" : "default"};
    display: flex;

    img {
        margin-right: 5px;
        height: 16px;
    }

    span {
        margin-top: 2px;
    }
`;
