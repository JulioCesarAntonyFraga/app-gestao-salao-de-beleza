import React, { useEffect, useState } from 'react'
import ApiService from '../../Services/Api'
import generateTable from '../../Components/Table';
import { message } from 'antd';
import { useNavigate } from "react-router-dom";

const ProductStockMovements = () => {
    const baseRoute = '/ProductStockMovements';
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(true);

    const successMessage = (text) => {
        messageApi.open({
            type: 'success',
            content: text,
        });
    };

    const errorMessage = (text) => {
        messageApi.open({
            type: 'error',
            content: text,
        });
    };

    useEffect(() => {
        ApiService.get(`${baseRoute}`).then((response) => {
            setData(response.data);
            setLoading(false);
        });
    }, []);

    const handleDelete = (id) => {
        setLoading(true);
        ApiService.delete(`${baseRoute}/${id}`).then((response) => {
            ApiService.get(`${baseRoute}`).then((response => {
                setData(response.data);
                setLoading(false);
            }))
            successMessage('Deletado com sucesso')
        }).catch((error) => {
            errorMessage('Algo deu errado')
            setLoading(false);
        })
        
    };
    
    const handleEdit = (id) => {
        navigate(`${baseRoute}/${id}`);
    };
      
    const fields = [
        {
            dataIndex: 'id',
            title: 'ID',
        },
        {
            dataIndex: 'createdAt',
            title: 'Data',
            mask: 'timestamp',
        },
        {
            dataIndex: 'typeName',
            title: 'Tipo'
        },
        {
            dataIndex: 'amount',
            title: 'Quantidade',
        }
      ];

  return (
    
    <div>
        {contextHolder}
        <h2>
            Movimentações De Estoque
        </h2>
        {generateTable(data, fields, loading, handleDelete, handleEdit, successMessage)}
    </div>
  )
}

export default ProductStockMovements