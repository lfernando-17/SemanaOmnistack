import React , {useEffect,useState} from 'react';
import './styles.css';
import {Link , useHistory} from 'react-router-dom';
import {FiPower,FiTrash2} from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';
import api from '../../services/api';
export default function Profile ()
{
  const history = useHistory();
  const [incidents,setIncidents] = useState([]);
  const OngId = localStorage.getItem('ongId');
  const OngName = localStorage.getItem('ongName');
  useEffect(( ) => {
    api.get('profile',{
      headers : 
      {
        authorization : OngId ,
      }
    }).then(response => {
      setIncidents(response.data);
    })
   } , [OngId] );

async function handleDeleteIncident(id)
{
  try {
  await api.delete(`incidents/${id}`,{
    headers : {
      authorization : OngId ,
    }
  });
  setIncidents(incidents.filter(incident => incident.id !== id));

  }catch(err)
  {
    alert('ERRO');
  }
}

function handleLogout()
{
  localStorage.clear();
  history.push('/');
}

    return(
            <div className="profile-container">
                <header>
                    <img src={LogoImg} alt = "Be the Hero"/>
                     <span>Bem Vinda, {OngName}</span>
                    <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                    <button onClick={handleLogout}type="button">
                    <FiPower size={18} color="#E02041"/>
                    </button>
                </header>

                    <h1>Casos Cadastrados</h1>
                    <ul>
                       {incidents.map(incident => (
                          <li key={incident.id}>
                          <strong>CASO:</strong>  
                          <p>{incident.title}</p>
                          <strong>DESCRIÇÃO :</strong>
                          <p>{incident.description}</p>
                          <strong>Valor</strong>
                          <p>{Intl.NumberFormat('pt-BR',{style : 'currency',currency : 'BRL'}).format(incident.value)}</p>
                          <button onClick={() => handleDeleteIncident(incident.id)}type="button">
                              <FiTrash2 size={20} color="#a8a8b3" />
                          </button>
                        </li>))}
                        

                    </ul>

            </div>
    );
}