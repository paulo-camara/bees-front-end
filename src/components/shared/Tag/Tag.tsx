import styled from "styled-components";

type TagPropsModel = {
    value: string;
    icon: string;
};

export const Tag = ({ value, icon }: TagPropsModel) => {
    return (
        <ContainerTag>
            <i className={`fa ${icon}`} />
            {value}
        </ContainerTag>
    )
};

const ContainerTag = styled.div`
    background-color: #f2ec54;
    padding: 8px;
    border-radius: 22px;
    font-size: 12px;

    i {
        margin-right: 5px;
        font-size: 11px;
    }
`;