import styled from "styled-components";

interface TagPropsModel {
    value: string;
    icon: string;
    cursorPointer?: boolean;
    onClick?: Function;
    children?: React.ReactNode;
};

export const Tag = ({ value, icon, cursorPointer, onClick, children }: TagPropsModel) => {
    return (
        <ContainerTag onClick={() => onClick && onClick()} cursorPointer={cursorPointer}>
            <img src={icon} alt="Icon-tag" />
            {!children ? <span>{value}</span> : children}
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
        word-break: break-all;
    }
`;
