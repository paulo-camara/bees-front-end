import styled from "styled-components";
import { Tag } from "../Tag/Tag"

type CardPropsModel = {
    title: string;
    address: string;
    phone: string;
    postalCode: string;
    type: string;
};

export const Card = ({ title, address, phone, postalCode, type }: CardPropsModel) => {
    return (
        <ContainerCard>
            <Header className="header">
                <img className="icon_trash" src="/icon_trash.png" />
            </Header>
            <Title>
                <span>{title}</span>
            </Title>
            <Address className="address">
                <span>{address}</span>
            </Address>
            <ContainerTags>
                <Tag
                    icon={"fa-chart-bar"}
                    value={type.toUpperCase()} />
                <Tag
                    icon={"fa-thumbtack"}
                    value={postalCode} />
                <Tag
                    icon={"fa-phone"}
                    value={phone} />
                <Tag
                    icon={"fa-plus"}
                    value={"Add More"} />
            </ContainerTags>
        </ContainerCard>
    )
};

const ContainerCard = styled.div`
    width: 240px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 5px 20px 20px 20px;
`;

const Header = styled.div`
    display: flex;
    justify-content: end;
    font-size: 13px;
    margin-top: 5px;
    margin-bottom: 10px;

    .icon_trash {
        cursor: pointer;
    }
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 20px;
`;

const Address = styled.div`
    color: #3f3f46;
`;

const ContainerTags = styled.div`
    margin-top: 15px;
    display: flex;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
`
