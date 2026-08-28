import { useEffect, useState } from 'react';

function App() {
    const [notificacoes, setNotificacoes] = useState(0);

    useEffect(() => {
        if (notificacoes > 0) {
            document.title = `(${notificacoes}) Nova Mensagens!`;
        }else {
            document.title = 'Sem Mensagens';
        }
    }, [notificacoes]);

    return (
        <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h2>O Poder do Efeito Colateral ⚡</h2>
            <p style={{ fontSize: '1.2rem' }}>
                Temos {notificacoes} notificações na memória do App.
                <br />
                <strong>Olhe para o topo da janela do seu navegador! 👀</strong>
            </p>
            <button
                onClick={() => setNotificacoes(notificacoes + 1)}
                style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer'}}
            >
                Simular Recebimento de Mensagem
            </button>
        </div>
    );
}

export default App;
