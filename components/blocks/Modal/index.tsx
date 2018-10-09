import * as React from 'react'
import { connect } from 'react-redux'

interface ModalProps {
  dispatch?: any
}

const Modal: React.SFC<ModalProps> = () => {
  return (
    <div className='modal-overlay'>
      <form className='modal-form'>
        <div className='modal-form-close'>
          <i className='modal-form-close-icon' />
        </div>
        <div className='modal-form-title'>Форма заявки</div>
        <div className='modal-form-info'>
          Для того, что бы менеджер мог с Вами связаться, заполните следующие
          пункты.
        </div>
        <input
          className='modal-form-input modal-form-name'
          type='text'
          placeholder='Ваше имя'
        />
        <input
          className='modal-form-input modal-form-phone'
          type='text'
          placeholder='Телефон'
        />
        <input
          className='modal-form-input modal-form-mail'
          type='text'
          placeholder='Email'
        />
        <textarea
          className='modal-form-input modal-form-comment'
          placeholder='Комментарий'
        />
        <input className='modal-form-submit' type='submit' value='Отправить' />
      </form>
    </div>
  )
}

export default connect()(Modal)
