import React, { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import {  mdiMessageOutline, mdiDelete, mdiPlus, mdiMinus } from '@mdi/js';

import api from '../../connection/api';


const Itens = () => {

  const id = localStorage.getItem('id'); 
  const [carts, setCart] = useState([]);

  useEffect(() => {
    api.get('carrinho').then(Response =>{
        setCart(Response.data);
      })
    },[id]);

    async function handleDeleteItem(id) {
      try {
        await api.delete(`carrinho/${id}`);
        setCart(carts.filter (cart => cart.id !== id));
      }catch {
        alert('Erro ao deletar item, tente novamente');
      }
    }
  

  return (
    <>
        <ul>
      {carts.map(cart =>(
          
          <li className="product-itens">
                <figure>
                  <img src={ cart.url_imagem } alt="produto" />
                </figure>
                <span className="itens">
                  <h4><a href="#teste">{cart.nome}</a></h4>
                  <h5>{cart.sku}</h5>
                  <p><a href="#teste"><Icon path={ mdiMessageOutline } size={1} color="#E53935"/> Adicionar observação</a></p>
                </span>
                <span className="itens-input"><Icon path={ mdiMinus } size={1} color="#9e9e9e"/><input value="2" /><Icon path={ mdiPlus } size={1} color="#E53935"/></span>
                <span className="itens-total-trash">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(cart.valor_unitario)}
                <Icon className="icon" onClick={() =>handleDeleteItem(cart.id)} path={ mdiDelete } size={1} color="#E53935" /></span>
        </li>
      ))}
      </ul>
    </>
  )
}

export default Itens;