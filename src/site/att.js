import React, { useState } from 'react';
import playersData from '../api/players.json';

const UpdatePlayers = () => {
  // Inicialize o estado com os dados dos jogadores
  const [players, setPlayers] = useState(playersData);

  // Estado para armazenar os valores do formulário
  const [formValues, setFormValues] = useState(
    players.reduce((acc, player) => {
      acc[player.id] = {
        match: '',
        kill: '',
        death: '',
        assist: '',
        round: '',
        mvp: '',
        rating: '',
      };
      return acc;
    }, {})
  );

  // Função para atualizar o estado do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    const [id, field] = name.split('_');

    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: {
        ...prevValues[id],
        [field]: value
      }
    }));
  };

  // Função para aplicar as mudanças
  const applyChanges = () => {
    const updatedPlayers = players.map((player) => {
      const newValues = formValues[player.id];
      const newRating = (parseInt(newValues.kill) * 100 + 
                         parseInt(newValues.assist) * 50 - 
                         parseInt(newValues.death) * 50 + 
                         parseInt(newValues.mvp) * 100) / 
                         (parseInt(newValues.round) || 1); // evitar divisão por zero
  
      return {
        ...player,
        match: player.match + (parseInt(newValues.match) || 0),
        kill: player.kill + (parseInt(newValues.kill) || 0),
        death: player.death + (parseInt(newValues.death) || 0),
        assist: player.assist + (parseInt(newValues.assist) || 0),
        round: player.round + (parseInt(newValues.round) || 0),
        mvp: player.mvp + (parseInt(newValues.mvp) || 0),
        rating: [...player.rating, newRating] // adiciona o novo rating ao array
      };
    });
    setPlayers(updatedPlayers);
  };

  return (
    <div>
      <h1>Update Player Stats</h1>
      {players.map((player) => (
        <div key={player.id}>
          <h2>Player {player.id}</h2>
          <form>
            {Object.keys(formValues[player.id]).map((field) => (
              <label key={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}:
                <input
                  type="number"
                  name={`${player.id}_${field}`}
                  value={formValues[player.id][field]}
                  onChange={handleChange}
                />
                <br />
              </label>
            ))}
            <br />
          </form>
        </div>
      ))}
      <button type="button" onClick={applyChanges}>
        Apply Changes
      </button>
      <div>
        <h2>Updated Data</h2>
        <pre>{JSON.stringify(players, null, 2)}</pre>
      </div>
    </div>
  );
};

export default UpdatePlayers;