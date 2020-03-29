import React, { useState } from 'react';

import api from '../../services/api';

import { useHistory } from 'react-router-dom';
import { FiPower,FiArrowLeft  } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function EditProfile() {  
    const [name, setName] = useState(localStorage.getItem('ongName'));
    const [email, setEmail] = useState(localStorage.getItem('ongEmail'));
    const [whatsapp, setWhatsapp] = useState(localStorage.getItem('ongWhatsapp'));
    const [city, setCity] = useState(localStorage.getItem('ongCity'));
    const [uf, setUf] = useState(localStorage.getItem('ongUf'));
    
    const history = useHistory(); 

    const id = localStorage.getItem('ongId');  

    function handleLogout() {
        localStorage.clear();

        history.push('/');
        
    }

    function handleReturn() {

        history.push('/profile');
        
    }

    async function handleUpdateProfile(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        
        try {
            await api.put(`/ongs/${id}`, data);

            alert('Dados Atualizados!');
            
            localStorage.setItem('ongName', name);
            localStorage.setItem('ongEmail', email);
            localStorage.setItem('ongWhatsapp', whatsapp);
            localStorage.setItem('ongCity', city);
            localStorage.setItem('ongUf', uf);

            history.push('/profile');
            
        } catch (error) {

            alert('Erro na atualização do cadastro, tente novamente!');
            
        }
        
    }

    return (
        <div className="edit-profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {name}</span>

                <div className="buttons">
                    <button onClick={handleReturn} type="button">
                        <FiArrowLeft size={18} color="#E02041"/>
                    </button>                 
                    <button onClick={handleLogout} type="button">
                        <FiPower size={18} color="#E02041"/>                    
                    </button>   
                </div>                            
            </header>            
            <form onSubmit={handleUpdateProfile}>
                <h1>Editar Cadastro</h1>
                <input 
                    placeholder="Nome da ONG" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    placeholder="Whatsapp" 
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                />

                <div className="input-group">
                    <input 
                    placeholder="Cidade" 
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    />
                    <input 
                    placeholder="UF" 
                    style={{ width: 80}} 
                    value={uf}
                    onChange={e => setUf(e.target.value)}
                    />
                </div>

                <button className="button" type="submit">Atualizar</button>
            </form> 
        </div>    
    );
}    