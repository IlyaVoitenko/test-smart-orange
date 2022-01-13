import style from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form>
      <div className={style.container}>
        <div className={style.divInput}>
          <input
            type="text"
            placeholder="Имя"
            className={style.inputs}
            pattern="[A-Za-z]{1,32}"
          ></input>
          <span className={style.error}>Имя должно содержать только буквы</span>
        </div>
        <div className={style.divInput}>
          <input
            type="tel"
            placeholder="Номер телефона"
            pattern="[0-9]{1,10}"
            className={style.inputs}
          ></input>
          <span className={style.error}>
            Номер телефона должен содержать только цифры
          </span>
        </div>
        <div className={style.divInput}>
          <input
            type="email"
            placeholder="Е-mail"
            className={style.inputs}
          ></input>
          <span className={style.error}>Пример Е-mail : test:@test.com</span>
        </div>
        <input
          type="text"
          placeholder="Интересующий товар/услуга"
          className={style.inputs}
        ></input>
        <textarea placeholder="Сообщение" className={style.textarea}></textarea>
        <p className={style.condititonsText}>
          Отправляя заявку. Вы соглашаетесь с политикой конфиденциальности
        </p>
        <button className={style.btnSubmit}>ОТПРАВИТЬ &nbsp; &rarr;</button>
      </div>
    </form>
  );
};
export default ContactForm;
