import React from 'react'
import { useItens } from '../../context/selectedItens'
import { Form, Input, Label, SelectableContainer, SelectableHeader, SelectableGroup, ActionsContainer, AlertMsg, FinishButton } from './styles'
import SelectableItem from './selectableItem'

import Bateries from '../../assets/images/icons/Bateries.svg'
import Notebook from '../../assets/images/icons/Notebook.svg'
import Bottle from '../../assets/images/icons/Bottle.svg'
import Lamp from '../../assets/images/icons/Lamp.svg'
import Sofa from '../../assets/images/icons/Sofa.svg'
import Product from '../../assets/images/icons/Product.svg'
import Book from '../../assets/images/icons/Book.svg'
import Oleo from '../../assets/images/icons/oleo.svg'
import Attention from '../../assets/images/icons/Atenção.svg'
import Header from '../../components/header'

const itensArray = [
    {name:"Baterias / pilhas", image: Bateries},
    {name:"Eletrônicos", image: Notebook},
    {name:"Garrafas pet", image: Bottle},
    {name:"Lâmpadas", image: Lamp},
    {name:"Sofá / Móveis", image: Sofa},
    {name:"Papelão", image: Product},
    {name:"Livros", image: Book},
    {name:"Oléo de cozinha", image: Oleo},
]

function CreatePoint() {
    const { itens } = useItens()
    
    function createPoint() {
        console.log(itens);
    }
    return(
        <div>
            <Header/>
            <Form>
                <h1>Informe os seus dados</h1>
                <div>
                    <Label>Nome</Label>
                    <Input/>
                </div>
                <div>
                    <Label>CNPJ</Label>
                    <Input/>
                </div>
                <div>
                    <Label>Imagem</Label>
                    <Input/>
                </div>
                <div>
                    <Label>WhatsApp</Label>
                    <Input/>
                </div>
                <div>
                    <Label>Endereço</Label>
                    <Input/>
                </div>
                <div>
                    <Label>Bairro</Label>
                    <Input/>
                </div>
                <div>
                    <Label>Complemento</Label>
                    <Input/>
                </div>
                <SelectableContainer>
                    <SelectableHeader>
                        <h2>Itens coletáveis</h2>
                        <p>Selecione um ou mais</p>
                    </SelectableHeader>
                    <SelectableGroup>
                        {itensArray.map((item, index)=>(
                            <SelectableItem image={item.image} title={item.name} key={index}/>
                        ))}
                    </SelectableGroup>
                </SelectableContainer>
            </Form>
            <ActionsContainer>
                <AlertMsg>
                    <img src={Attention} alt={'Atenção'} />
                    <p>Preencha todos os dados</p>
                </AlertMsg>
                <FinishButton onClick={createPoint}>Finalizar</FinishButton>
            </ActionsContainer>
        </div>
    )
}

export default CreatePoint