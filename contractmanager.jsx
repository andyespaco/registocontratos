import React, { useState } from 'react';

function ContractManager() {
  const [contracts, setContracts] = useState([]);
  const [newContract, setNewContract] = useState({
    client: '',
    startDate: '',
    endDate: '',
    hours: 0,
    consumedHours: 0,
  });

  // Função para adicionar contrato
  const handleAddContract = (e) => {
    e.preventDefault();
    setContracts([...contracts, newContract]);
    setNewContract({
      client: '',
      startDate: '',
      endDate: '',
      hours: 0,
      consumedHours: 0,
    });
  };

  // Função para remover contrato
  const handleRemoveContract = (index) => {
    const updatedContracts = contracts.filter((_, i) => i !== index);
    setContracts(updatedContracts);
  };

  // Atualização dinâmica dos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContract({ ...newContract, [name]: value });
  };

  return (
    <div className="contract-manager">
      <form onSubmit={handleAddContract}>
        <input
          type="text"
          name="client"
          placeholder="Nome do Cliente"
          value={newContract.client}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="startDate"
          placeholder="Data de Início"
          value={newContract.startDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="endDate"
          placeholder="Data de Fim"
          value={newContract.endDate}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="hours"
          placeholder="Horas Contratadas"
          value={newContract.hours}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="consumedHours"
          placeholder="Horas Consumidas"
          value={newContract.consumedHours}
          onChange={handleChange}
          required
        />
        <button type="submit">Adicionar Contrato</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Data Início</th>
            <th>Data Fim</th>
            <th>Horas</th>
            <th>Horas Consumidas</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract, index) => (
            <tr key={index}>
              <td>{contract.client}</td>
              <td>{contract.startDate}</td>
              <td>{contract.endDate}</td>
              <td>{contract.hours}</td>
              <td>{contract.consumedHours}</td>
              <td>
                <button onClick={() => handleRemoveContract(index)}>
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContractManager;
