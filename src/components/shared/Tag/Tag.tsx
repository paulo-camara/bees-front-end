import styled from "styled-components";

type TagPropsModel = {
    value: string;
    icon: string;
    cursorPointer?: boolean;
};

export const Tag = ({ value, icon, cursorPointer }: TagPropsModel) => {
    return (
        <ContainerTag cursorPointer={cursorPointer}>
            <i className={`fa ${icon}`} />
            {value}
        </ContainerTag>
    )
};

type ContainerTagModel = {
    cursorPointer?: boolean;
};

const ContainerTag = styled.div<ContainerTagModel>`
    background-color: #f2ec54;
    padding: 8px;
    border-radius: 22px;
    font-size: 12px;
    cursor: ${props => props.cursorPointer ? "pointer" : "default"};

    i {
        margin-right: 5px;
        font-size: 11px;
    }
`;