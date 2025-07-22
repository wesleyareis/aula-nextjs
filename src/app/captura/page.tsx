import Image from 'next/image';
import './captura.css';

export default function Captura() {
  return (
    <main className="captura-container">
      <div className="captura-overlay">
        <nav className="captura-nav">
          <span className="logo">Premium Living</span>
          <button className="nav-cta">Fale com um Consultor</button>
        </nav>

        <section className="captura-hero">
          <div className="captura-textos">
            <span className="destaque-badge">Lançamento Exclusivo</span>
            <h1>Apartamento de Alto Padrão no Setor Bueno</h1>
            <p className="subtitulo">O endereço mais desejado de Goiânia agora pode ser seu. Uma obra-prima arquitetônica que combina luxo, conforto e localização privilegiada.</p>
            
            <div className="destaques-grid">
              <div className="destaque-item">
                <Image src="/window.svg" alt="Metragem" width={32} height={32} />
                <span>160m²</span>
              </div>
              <div className="destaque-item">
                <Image src="/file.svg" alt="Suítes" width={32} height={32} />
                <span>4 Suítes</span>
              </div>
              <div className="destaque-item">
                <Image src="/globe.svg" alt="Vagas" width={32} height={32} />
                <span>3 Vagas</span>
              </div>
            </div>

            <ul className="beneficios-lista">
              <li>✨ Localização nobre no coração do Setor Bueno</li>
              <li>🏊‍♂️ Área de lazer completa com piscina e academia</li>
              <li>🔒 Segurança 24h com portaria blindada</li>
              <li>🎯 Acabamento premium importado</li>
              <li>💎 Condições especiais de pré-lançamento</li>
            </ul>
          </div>

          <div className="captura-form-wrapper">
            <div className="form-container">
              <div className="form-header">
                <h2>Garanta Condições Exclusivas</h2>
                <p>Cadastre-se para receber valores e plantas</p>
              </div>

              <form className="captura-form">
                <div className="input-group">
                  <input type="text" name="nome" placeholder="Seu nome completo" required />
                </div>
                <div className="input-group">
                  <input type="email" name="email" placeholder="Seu melhor e-mail" required />
                </div>
                <div className="input-group">
                  <input type="tel" name="telefone" placeholder="Seu WhatsApp" required />
                </div>
                <button type="submit" className="submit-button">
                  QUERO CONHECER AGORA
                </button>
              </form>

              <div className="form-footer">
                <p>🔒 Suas informações estão seguras</p>
                <p>⚡ Retorno em até 24h</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
