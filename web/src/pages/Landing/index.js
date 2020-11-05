import React, { useEffect, useState } from "react";
import api from "../../services/api";

import Loader from "../../components/Loader";
import "./styles.css";

const Landing = () => {
  const [listCoins, setListCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function loadCoins() {
    setIsLoading(true);
    api
      .get("/coins")
      .then((response) => {
        setListCoins(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    loadCoins();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="container-landing">
      <h1>Principais Criptomoedas</h1>
      <p>Na listagem da Coinmarketcap</p>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="content-landing show">
          {listCoins.map((coin) => (
            <div key={coin.id} className="box-coin-info backgroundbox">
              <div>
                <img
                  src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                  alt={"logo" + coin.name}
                />
                <h2>Name: {coin.name}</h2>
              </div>
              <p>Abreviação: {coin.symbol}</p>
              <p>Ranking Coinmarketcap: {coin.cmc_rank}</p>
              <p>
                Cotação Atual: <strong>U$D</strong>{" "}
                {coin.quote["USD"].price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
      <footer>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://linkedin.com/in/luizeduul"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luiz Uliana
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Landing;
