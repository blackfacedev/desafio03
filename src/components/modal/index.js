import React from 'react';
import ReactModal from 'react-modal';

const Modal = props => (
  <ReactModal
    isOpen={props.showModal}
    contentLabel="Minimal Modal Example"
    style={{
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
      },
      content: {
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '25px',
        height: '180px',
        width: '340px',
        margin: '0 auto',
        marginTop: '200px',
        textAlign: 'center',
      },
    }}
  >
    <h1
      style={{
        fontSize: '16px',
        marginBottom: '10px',
        textAlign: 'center',
      }}
    >
      Adiciona um novo usuário
    </h1>
    <form>
      <input
        onChange={props.handleInputUser}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '10px',
          fontSize: '14px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
        type="text"
        placeholder="Usuário do GitHub"
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          style={{
            flex: '1',
            padding: '10px',
            borderRadius: '4px',
            background: '#cccccc',
            color: '#fff',
            fontSize: '14px',
          }}
          type="button"
          onClick={props.handleCloseModal}
        >
          Cancelar
        </button>
        <button
          style={{
            flex: '1',
            padding: '10px',
            marginLeft: '5px',
            borderRadius: '4px',
            background: '#85c47c',
            color: '#fff',
            fontSize: '14px',
          }}
          type="button"
          onClick={props.handleAddUser}
        >
          Salvar
        </button>
      </div>
    </form>
  </ReactModal>
);

export default Modal;
