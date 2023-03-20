import styles from  './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    
    return <div onClick={props.onClick} className={styles.backdrop}>            
    </div>
}

const ModaleOverlay = (props) => {

    return <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
}

const portalToHTML = document.getElementById('overlays')

const Modal = (props) => {

    return <>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalToHTML)}
    {ReactDOM.createPortal(<ModaleOverlay>{props.children}</ModaleOverlay>, portalToHTML)}
    </>
}

export default Modal