import { Link } from 'react-router-dom'
import "./Error.css"

// Contenu de la page "Error" pour les erreurs de type 404, incluant un lien vers la page d'accueil avec l'API "Link" de React Router
function Error() {
    return <div className="error">
        <h1 className="error_404">404</h1>
        <h2 className="error_msg">Oups! La page que vous demandez n'existe pas.</h2>
        <h3 className="error_redirection"><Link to="/">Retourner sur la page d'accueil</Link></h3>
    </div>
}

export default Error