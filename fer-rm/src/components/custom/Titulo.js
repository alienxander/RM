import './css/Titulo.scss'
const Titulo = ({titulo}) => {
    return(
        <div>
            <br/>
            <div className="row">
                <div className="col-xl titulo">
                    {titulo}
                </div>
            </div>
            <br/>
        </div>
    );
};

export default Titulo;