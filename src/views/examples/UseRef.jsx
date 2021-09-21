import React, {useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="tex">Valor:</span>
                <span className="text">{value1}</span>
                <input type="text" className="input" 
                    value={value1} onChange={e => setValue1(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
