import React, { useState } from "react";
import styled from "styled-components";
import { InputField } from "../FormComponents/InputField";
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
    const [valueInput, setValueInput] = useState<string>("");
    const [showInput, setShowInput] = useState<boolean>(false);

    const onkeyPress = (event: any) => {
        if (event.key === "Enter") setShowInput(false);
    };

    const onChange = (event: any) => {
        setValueInput(event.target.value);
    };

    const closeInput = (e : any)=> {
        if(showInput && !e.target.id) {
            setShowInput(false);
        }
    };

    return (
        <ContainerCard onClick={closeInput}>
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
                {type && <Tag icon={"/images/phone_icon.png"} value={type.toUpperCase()} />}
                {address && <Tag icon={"/images/location-marker.png"} value={postalCode} />}
                {phone && <Tag icon={"images/phone_icon.png"} value={phone} />}
                <Tag
                    cursorPointer={true}
                    icon={"images/addmore_icon.png"}
                    value={valueInput || "Add More"}
                    onClick={() => {
                        setShowInput(true)
                    }}>
                    {showInput && <InputField id="testando" autoFocus style={{ margin: "0px", height: "18px", width: "68px" }} onChange={onChange} onKeyPress={onkeyPress} value={valueInput} />}
                </Tag>
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
