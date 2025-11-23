import './App.css'

function App() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <div className="logo">
            <h2>🎮 EduPlay</h2>
          </div>
          <div className="nav-links">
            <a href="#features">Características</a>
            <a href="#how-it-works">Cómo funciona</a>
            <a href="#pricing">Precios</a>
            <button className="btn-login">Iniciar sesión</button>
            <button className="btn-primary">Registrarse</button>
          </div>
        </nav>
        
        <div className="hero-content">
          <h1>Aprende jugando con quizzes interactivos</h1>
          <p className="hero-subtitle">
            Crea, comparte y juega cuestionarios educativos al estilo Kahoot. 
            Haz que el aprendizaje sea divertido y competitivo.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary btn-large">Crear quiz gratis</button>
            <button className="btn-secondary btn-large">Ver demo</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Quizzes creados</span>
            </div>
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Estudiantes activos</span>
            </div>
            <div className="stat">
              <span className="stat-number">5K+</span>
              <span className="stat-label">Profesores</span>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <h2 className="section-title">¿Por qué elegir EduPlay?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Rápido y fácil</h3>
            <p>Crea quizzes en minutos con nuestra interfaz intuitiva</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Tiempo real</h3>
            <p>Juega en vivo con múltiples participantes simultáneamente</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Estadísticas</h3>
            <p>Analiza el rendimiento de tus estudiantes con reportes detallados</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Personalizable</h3>
            <p>Añade imágenes, colores y diseños únicos a tus quizzes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Gamificación</h3>
            <p>Rankings, puntos y premios para motivar a los estudiantes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Multi-dispositivo</h3>
            <p>Funciona en computadoras, tablets y smartphones</p>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="how-it-works">
        <h2 className="section-title">Cómo funciona</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Crea tu quiz</h3>
            <p>Añade preguntas, respuestas y configura el tiempo</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Comparte el código</h3>
            <p>Los jugadores se unen con un código único</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>¡Juega en vivo!</h3>
            <p>Responde preguntas y compite por el primer lugar</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>¿Listo para revolucionar tu forma de enseñar?</h2>
          <p>Únete a miles de educadores que ya están usando EduPlay</p>
          <button className="btn-primary btn-large">Comenzar ahora - Es gratis</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EduPlay</h3>
            <p>Haciendo el aprendizaje más divertido</p>
          </div>
          <div className="footer-section">
            <h4>Producto</h4>
            <a href="#">Características</a>
            <a href="#">Precios</a>
            <a href="#">Demo</a>
          </div>
          <div className="footer-section">
            <h4>Recursos</h4>
            <a href="#">Blog</a>
            <a href="#">Tutoriales</a>
            <a href="#">Ayuda</a>
          </div>
          <div className="footer-section">
            <h4>Empresa</h4>
            <a href="#">Sobre nosotros</a>
            <a href="#">Contacto</a>
            <a href="#">Privacidad</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 EduPlay. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
