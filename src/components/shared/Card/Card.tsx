import styled from "styled-components";
import { Tag } from "../Tag/Tag"

type CardPropsModel = {
    title: string;
    address: string;
    phone: string;
    postalCode: string;
    type: string;
    id: string;
    onRemove: Function;
};

export const Card = ({ title, address, phone, postalCode, type, id, onRemove }: CardPropsModel) => {
    return (
        <ContainerCard>
            <Header>
                <TrashIcon
                    alt="Trash"
                    src="/images/icon_trash.png"
                    onClick={() => onRemove(id)}
                />
            </Header>
            <Title>
                <span>{title}</span>
            </Title>
            <Address>
                <span>{address}</span>
            </Address>
            <ContainerTags>
                <Tag icon={"/images/phone_icon.png"} value={type.toUpperCase()} />
                <Tag icon={"/images/location-marker.png"} value={postalCode} />
                <Tag icon={"images/phone_icon.png"} value={phone} />
                <Tag cursorPointer={true} icon={"images/addmore_icon.png"} value={"Add More"} />
            </ContainerTags>
        </ContainerCard>
    )
};

const ContainerCard = styled.div`
    width: 240px;
    height: 240px;
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

const TrashIcon = styled.img`
    cursor: pointer;
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 20px;
`;

const Address = styled.div`
    margin-top: 15px;
    font-size: 15px;
    color: #3f3f46;
`;

const ContainerTags = styled.div`
    margin-top: 15px;
    display: flex;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
`;
